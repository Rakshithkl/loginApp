import React,{Component} from 'react';
import {Button,FormControl,FormGroup,ControlLabel,Submit} from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
class AddDirectors extends Component{
    state={
        firstname:"",
        firstnameError:"",
        username:"",
        usernameError:"",
        email:"",
        emailError:"",
        password:"",
        passwordError:"",
        phonenumber:"",
        phonenumberError:"",
    }
componentDidMount(){
    reactLocalStorage.setObject('user',{})
   }
   handleChange=e=>{
       this.setState({
           [e.target.name]:e.target.value
       })
   }
//    handleSubmit=e=>{
//        const{username,password,firstname,email,phonenumber}=this.state
//       if(username!==""){
//           this.setState({usernameError:true})
//       }else{
//           this.setState({usernameError:false})
//       }
    
    
//     )
render(){
    const{firstnameError,usernameError,emailError,phonenumberError,passwordError}=this.state
return(
        <div>
         <form>
         <FormGroup bsSize="large">
             <ControlLabel>firstname</ControlLabel>
             <FormControl 
             onChange={this.handleChange}
             name="firstname"/>
             </FormGroup>
             <FormGroup bsSize="large">
             <ControlLabel>Username</ControlLabel>
             <FormControl
             name="username"
             handleChange={this.handleChange}/>
             </FormGroup>
             <FormGroup bsSize="large">
             <ControlLabel>Email</ControlLabel>
             <FormControl
             name="email"
             handleChange={this.handleChange}/>
             </FormGroup>
             <FormGroup bsSize="large">
             <ControlLabel>Phonenumber</ControlLabel>
             <FormControl
             name="phonenumber"
             handleChange={this.handleChange}/>
             </FormGroup>
            <Button
               bsSize="large"
               onClick={this.Submit}
               type="submit">Login</Button>

        </form>
        </div>
       )
     }
   }
export default AddDirectors;