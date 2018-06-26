import React,{Component} from 'react';
import {FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
import { isError } from 'util';
import "../component/login2.css";
import { reactLocalStorage } from 'reactjs-localstorage';
class Login2 extends Component{
    state={
        username:"",
        email:"",
        phonenumber:"",
        password:"",
        unameError:false,
        pwError:false
    }
    componentDidMount(){
        reactLocalStorage.setObject('user',{})
    }
    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    validateForm(){
      let  isError=false;
        const errors={
            usernameError:"",
            emailError:"",
            phonenumberError:"",
            passwordError:"",
        }
        if(this.state.username.length<5){
            isError=true;
            errors.usernameError="please enter atleast 5 letter"
        }
        if(this.state.email('@')===-1){
            isError=true,
            errors.emailError="please enter valid email"
        }
        if(this.state.phonenumber.length<5){
            isError=true,
            errors.phonenumberError="please enter valid number"
        }
        if(this.state.password.length<5){
            isError=true,
            errors.passwordError="please enter valid password"
        }
        this.setState({
            ...this.state,
            ...errors
        })
    return isError
    }
    handleSubmit=event=>{
      
    
        const{username,password}=this.state
        if(username !== "admin"  || password !== "admin" ){
            if( username !== "admin" ){
                this.setState({unameError:true})
            }else{
                this.setState({unameError:false})
            }
            if(password !=="admin"){
                this.setState({pwError:true})
            }else{
                this.setState({pwError:false})
            }
        }else{
            this.props.history.push('/Page')
        }
        event.preventDefault()
        

    }
    render(){
        const { unameError,pwError } = this.state
        return(
            <div className="Login2">
            <form>
                <FormGroup bsSize="large">
                <ControlLabel>username</ControlLabel>
                <FormControl
                
                onChange={this.handleChange}
                value={this.state.username}
                name="username" />
                </FormGroup>
           { unameError && <p> username error </p> }
        
          <FormGroup bsSize="large">
            <ControlLabel>password</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
           { pwError && <p> password error </p> }
            
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
export default Login2;