import React,{Component, Profiler} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';



   
      
      const formValid = ({ formErrors, ...rest }) => {
        let valid = true;
      
        // validate form errors being empty
        Object.values(formErrors).forEach(val => {
          val.length > 0 && (valid = false);
        });
      
        // validate the form was filled out
        Object.values(rest).forEach(val => {
          val === null && (valid = false);
        });
      
        return valid;
      };
      
      class LoginStudent extends React.Component{
        constructor(props) {
          super(props);
      
          this.state = {
            Username: null,
            password: null,
            formErrors: {
              Username: "",
              password: ""
            }
          };
          this.clickHandler = this.clickHandler.bind(this);
          this.handleUsernameChange = this.handleUsernameChange.bind(this);
          this.handlepasswordChange = this.handlepasswordChange.bind(this);
        }
        clickHandler() {
            axios.post("https://crudcrud.com/api/aab323716d694995ae37d1d7952efb36/users",
                JSON.stringify({Username: this.state.Username, password: this.state.password}),
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(r => {
                alert("successfully created user")
            }).catch(error => {
                alert("something went wrong");
                console.log(error);
            });
        }
    
        
        handleUsernameChange(e) {
            console.log(e.target.value);
            this.setState({Username: e.target.value});

        }
        handlepasswordChange(e) {
            console.log(e.target.value);
            this.setState({password: e.target.value});

        }
      
        handleSubmit = e => {
          e.preventDefault();
      
          if (formValid(this.state)) {
            console.log(`
              --SUBMITTING--
              Username: ${this.state.Username}
              Password: ${this.state.password}
            `);
          } else {
            console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
          }
        };
      
        handleUsernameChange = e => {
          e.preventDefault();
          const { name, value } = e.target;
          let formErrors = { ...this.state.formErrors };
      
          switch (name) {
            case "Username":
              formErrors.Username =
                value.length < 3 ? "minimum 3 characaters required" : "";
              break;
       }
      
          this.setState({ formErrors, [name]: value }, () => console.log(this.state));
        };


        handlepasswordChange = e => {
            e.preventDefault();
            const { name, value } = e.target;
            let formErrors = { ...this.state.formErrors };
        
            switch (name) {
                case "password":
                    formErrors.password =
                      value.length < 6 ? "minimum 6 characaters required" : "";
                    break;
                  default:
                    break;
         }
        
            this.setState({ formErrors, [name]: value }, () => console.log(this.state));
          };

 render() {
          const { formErrors } = this.state;
      
          return (
            <div className="wrapperlogin"style={{
              backgroundImage: "url(assets/images/login-bg3.gif)",
              backgroundSize: "cover",
              backgroundRepeat: " repeat" ,
              height: "100vh",
            }}>

               <div class="imagelogin">
               <div className=" image">
               <img src="assets/images/logo.png" id="logo-img"/>
               </div>
               </div>






              <div className="form-wrapperlogin">
                <h1 >Login</h1>

              <form onSubmit={this.handleSubmit} noValidate>
              <div className="Username">
                    <label htmlFor="Username"></label>
                    <input 
                      className={formErrors.Username.length > 0 ? "error" : null}
                      placeholder="Username"
                      type="text"
                      name="Username"
                      noValidate
                      onChange={this.handleUsernameChange}
                    />
                    {formErrors.Username.length > 0 && (
                      <span className="errorMessage">{formErrors.Username}</span>
                    )}
                  </div>
                 
                  
                  <div className="password">
                    <label htmlFor="password"></label>
                    <input 
                      className={formErrors.password.length > 0 ? "error" : null}
                      placeholder="Password"
                      type="password"
                      name="password"
                      noValidate
                      onChange={this.handlepasswordChange}
                    />
                    {formErrors.password.length > 0 && (
                      <span className="errorMessage">{formErrors.password}</span>
                    )}
                  </div>
                  <div className="createAccount">
                  <Link to="/Home-Student"><button type="submit"onClick={this.clickHandler}>Login</button></Link>
                  </div>
                </form>
              </div>
            </div>
          );
        }
      }
  export default LoginStudent