import React,{Component} from 'react';import { Button, FormGroup, FormControl, ControlLabel,DropdownButton,MenuItem } from "react-bootstrap";

import { reactLocalStorage } from 'reactjs-localstorage';
class LoginForm extends Component{
    state={
        id:"",
        idError:"",
        password:"",
        passwordError:""
    }
    ComponentDidMount(){
        reactLocalStorage.setObject('user',{})
    }
    validateForm(){
        return this.state.id.length>0&&this.state.password.length>0
    }
    handleChange=event=>{
        this.setState=({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=event=>{
        if(id==="admin"&& password==="admin"&&type==="admin")
        const{id,password,type}=res.user
        reactLocalStorage.setObject('user',{id,password,type})
        this.props.history.push('/')
    
    {
            fetch('/'+type+'s/login/'+username + '/'+password ,{
                method:'GET',
            }).then(res=>res.json())
            .then(res=>{
                if(secuss.res){
                    const{firstname,username,id,type,password}=res.user
                    reactLocalStorage.setObject('user',{firstname,username,id,password,type})
                if(type==="BDM"){
                    const{dir_id}=res.user
                    reactLocalStorage.setObject('user',{firstname,username,id,password,type,dir_id})
                    this.props.history.push('/')
                }

                }
            })
            event.preventDefault()
        }
    }
        render(){
            return(
                <div>
                    <form>
                        <FormGroup bsSize="large">
                        <ControlLabel>ID</ControlLabel>
                        <FormControl 
                        name="id"
                        handleChange={this.handleChange}
                        value={this.state.id} />
                        </FormGroup>
                        <FormGroup bsSize="large">
                        <ControlLabel>PASSWORD</ControlLabel>
                        <FormControl 
                       
                        name="password"
                        handleChange={this.handleChange}
                        value={this.state.password} />
                        </FormGroup>
                        <FormGroup bsSize="large">
                        <ControlLabel>type</ControlLabel>
                        <FormControl 
                
                        name="id"
                        handleChange={this.handleChange}
                        value={this.state.password} />
                        </FormGroup>
                        <Button
            block
            bsSize="large"
            // disabled={!this.validateForm()}
            onClick={this.onSubmit}
            type="submit">
            Create Account
          </Button>
                    </form>
                </div>
            )
        }

    }

    export default LoginForm;




