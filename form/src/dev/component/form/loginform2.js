import React ,{Component} from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import {FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';
import './loginform2.css';
class LoginForm2 extends Component{
    state={
        id:"",
        idError:"",
        type:"",
        typeError:"",
        password:"",
        passwordError:""
    }
    componentDidMount(){
        reactLocalStorage.setObject('user',{})
    }
    handleChange=e=>{
        this.setState({
            [e.target.value]:e.target.name
        }) 
    }
    validateForm(){
        this.state.id>5&& this.state.username>5&& this.state.password
    }
    handleSubmit=e=>{
   if(id==='admin'&& username==='admin' && password==='admin')
//    const{id,type,password}=res.user
   this.props.history.push('/')
    }
    render(){
        return(
            <div >
            <form className="my-form" >
                <FormGroup bsSize="large">
                <ControlLabel>ID</ControlLabel>
                <FormControl
                name="id"
                handleChange={this.handleChange}/>
                </FormGroup>
                <FormGroup bsSize="large">
                <ControlLabel>Type</ControlLabel>
                <FormControl
                name="type"
                handleChange={this.handleChange}/>
                </FormGroup>
                <FormGroup bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                name="id"
                handleChange={this.handleChange}/>
                </FormGroup>
                <Button className="button"
                bsSize="large"
                onClick={this.onSubmit}
                type="submit">
                Login
                </Button>
            </form>    
            </div>
        )
    }
}
export default LoginForm2;