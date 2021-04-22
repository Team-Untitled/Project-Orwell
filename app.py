from flask import Flask, render_template, request, jsonify, url_for, redirect, flash, Response, send_file, g, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Project-Orwell.db'
db = SQLAlchemy(app)

class Student(db.Model):
    id = db.Column(db.String, primary_key=True)
    password = db.Column(db.String, nullable=False)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=True)
    email = db.Column(db.String, unique=True, nullable=False)
    attention_level = db.Column(db.String, nullable=False)

# student1 = Student(id='S001', password='abcd', first_name='shaumya', last_name='alexandra', email='shaumya@gmail.com',
#              attention_level='0.0')
# student2 = Student(id='S002', password='bbcc', first_name='hansani', last_name='kavindi', email='kavindi@gmail.com',
#              attention_level='0.0')
#
# db.session.add(student1)
# db.session.add(student2)
# db.session.commit()

class User_Stu:
    def __init__(self, id, password, first_name, last_name, email, attention_level):
        self.id = id
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.attention_level = attention_level

    def __repr__(self):
        return f'<User: {self.first_name}>'

class User_Teacher:
    def __init__(self, id, password, full_name):
        self.id = id
        self.password = password
        self.full_name = full_name

    def __repr__(self):
        return f'<User: {self.full_name}>'


studentsList = []
studentsList.append(
    User_Stu(id='S001', password='abcd', first_name='shaumya', last_name='alexandra', email='shaumya@gmail.com',
             attention_level=0.0))
studentsList.append(
    User_Stu(id='S002', password='bbcc', first_name='hansani', last_name='kavindi', email='kavindi@gmail.com',
             attention_level=0.0))


teacherList = []
teacherList.append(User_Teacher(id='T001', password='aaaa', full_name="Anne Perera"))

id_list = []

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login/<int:id>')
def user_type(id):
    if id == 1:
        return render_template('login_stu.html')
    else:
        return render_template('login_teacher.html')

@app.route('/home/student', methods=['GET', 'POST'])
def login_stu():
    if request.method == 'POST':
        username = request.form['username']
        pwd = request.form['password']

        for x in studentsList:
            temp_id = x.id
            temp_pwd = x.password

            if(temp_id == username):
                if(temp_pwd == pwd):
                    id_list.append(username)
                    return render_template('home_student.html')
        return render_template('notification.html')

    return redirect('/')

@app.route('/home/teacher', methods=['GET', 'POST'])
def login_teacher():
    if request.method == 'POST':
        username = request.form['username']
        pwd = request.form['password']

        for y in teacherList:
            tempid = y.id
            tempwd = y.password
            if (tempid == username):
                if (tempwd == pwd):
                    return render_template('home_teacher.html')
        return render_template('notification.html')

    return redirect('/')

@app.route('/detection', methods=['GET', 'POST'])
def attention_detection():
    return render_template('attention_detection.html')

@app.route('/update_attention', methods=['GET', 'POST'])
def update_detection():
    xx = id_list[-1]
    update = Student.query.get_or_404(xx)
    if request.method == 'POST':
        updated_level = request.form['attention_level']
        print('level =',updated_level)
        update.attention_level = updated_level
        db.session.commit()
        return render_template('attention_detection.html', update=update)

    return redirect('/')

@app.route('/home')
def view_home_stu():
    return render_template('home_student.html')

@app.route('/teacher/home')
def view_home_teacher():
    return render_template('home_teacher.html')

@app.route('/attention_levels', methods=['GET'])
def display_attention_list():
    tasks = Student.query.order_by(Student.id).all()
    return render_template('view_attention.html', tasks=tasks)

@app.route('/student_profile', methods=['GET'])
def view_pro_stu():
    xx = id_list[-1]
    result = Student.query.get_or_404(xx)
    return render_template('view_pro_stu.html', result=result)

@app.route('/student/about')
def view_about_stu():
    return render_template('about_student.html')

@app.route('/teacher/about')
def view_about_teacher():
    return render_template('about_teacher.html')

@app.route('/help/student')
def help_stu():
    return render_template('help-stu.html')

@app.route('/help/teacher')
def help_teacher():
    return render_template('help_teacher.html')

@app.route('/view_report')
def view_report():
    tasks = Student.query.order_by(Student.id).all()
    return render_template('view_report.html', tasks=tasks)



if __name__ == '__main__':
    app.run()
