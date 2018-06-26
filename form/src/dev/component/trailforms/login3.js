import React,{Component} from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import {ControlLabel,FormControl,FormGroup,Button} from 'react-bootstrap'
import  '../component/login3.css';
class Login3 extends Component{
    state={
        firstname:"",
        firstnameError:false,
        lastname:"",
        lastnamenameError:false,
        phonenumber:"",
        phonenumberError:false,
        email:"",
        emailError:false,
        password:"",
        passwordError:false,
        conformpassword:"",
        conformpasswordError:false,
    }
    componentDidMount(){
        reactLocalStorage.setObject('user',{})
    }
    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        // console.log(this.state.phonenumber)
    }
    handleSubmit=e=>{
        e.preventDefault()
        const{firstname,lastname,phonenumber,email,password,conformpassword}=this.state
        if(firstname === ""|| lastname ===""||phonenumber ===""||email ===""|| password ==="" || password !== conformpassword){
            if(firstname ===""){
                this.setState({firstnameError:true})
            }else{
                this.setState({firstnameError:false})
            }
            if(lastname ===""){
                this.setState({lastnamenameError:true})
            }else{
                this.setState({lastnamenameError:false})
            }
            if(phonenumber ===""){
                this.setState({phonenumberError:true})
                // console.log(this.state.phonenumberError)
            }else{
                this.setState({phonenumberError:false})
            }
            if(email === ""){
                this.setState({emailError:true})
            }else{
                this.setState({emailError:false})
            }
            if(password === ""){
                this.setState({passwordError:true})
            }else{
                this.setState({passwordError:false })
            }
            if(conformpassword !== password ){
                this.setState({conformpasswordError:true})
            }else{
                this.setState({conformpasswordError:false})
            }

                }else{
                    this.setState({conformpasswordError:false})
                    fetch('/register', {
                        method: 'POST',
                        headers: {
                          'Accept': 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ firstname,lastname,phonenumber,email,password })
                      }).then(res => res.json())
                      .then(res=> console.log(res))
                      this.props.history.push('/Page')
                }
            }
        
render(){
    const{firstnameError,lastnamenameError,phonenumberError,emailError,passwordError,conformpasswordError}=this.state
    return(
        <div className="Login3">
         <h3>Register Form</h3>

        <form>
           
            <FormGroup bsSize="large">
            <ControlLabel>Firstname</ControlLabel>
            <FormControl
            name="firstname"
            onChange={this.handleChange}
            />
            { firstnameError && <p>firstnameError</p> }
            </FormGroup>
            <FormGroup bsSize="large">
            <ControlLabel>Lastname</ControlLabel>
            <FormControl
            name="lastname"
            onChange={this.handleChange}
            />
            { lastnamenameError && <p>lastnamenameError</p> }            
            </FormGroup>
            <FormGroup bsSize="large">
            <ControlLabel>Phonenumber</ControlLabel>
            <FormControl
            name="phonenumber"
            onChange={this.handleChange}
            />
            { phonenumberError && <p>phonenumberError</p> }            
            </FormGroup>
            <FormGroup bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
            name="email"
            onChange={this.handleChange}
            />
            { emailError && <p>emailError</p> }            
            </FormGroup>
            <FormGroup bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
            name="password"
            type="password"
            onChange={this.handleChange}
            />
            { passwordError && <p>passwordError</p> }                        
            </FormGroup>
            <FormGroup bsSize="large">
            <ControlLabel>Conformpassword</ControlLabel>
            <FormControl
            name="conformpassword"
            onChange={this.handleChange}
            type="password"
            />
            { conformpasswordError && <p>conformpasswordError</p> }                        
            </FormGroup>
            <Button
            block
            bsSize="large"
            // disabled={!this.validateForm()}
            onClick={this.handleSubmit}
            type="submit">
            Login
          </Button>
            </form>
            </div>
      )
   }
 }
 export default Login3;