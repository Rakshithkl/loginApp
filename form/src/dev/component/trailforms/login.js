import React,{Component} from 'react';
import {Button,FormControl,FormGroup,ControlLabel,Submit} from 'react-bootstrap';
import { reactLocalStorage } from 'reactjs-localstorage';
import "../component/login.css"
class Login extends Component{
    state={
            username:"",
            unameError:"",
            password:"",
            pwError:"",
            credientials_err:false,
        }
    
    componentDidMount(){
        reactLocalStorage.setObject('user',{})
    }
    validateForm(){
      return  this.state.username.length<5 && this.state.password.length<5
    }
    handleChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleSubmit=event=>{
        const{username,password}=this.state
        // console.log(username,password)
        
        // if(username==='admin'&&password==='admin'){
        //     reactLocalStorage.setObject('user',{username,password:'admin'})
        //     this.props.history.push('/Page')
        // }
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
        const{unameError,pwError}=this.state
        return(
            <div className="Login">
            <form>
            <FormGroup bsSize="large">
            <ControlLabel>username</ControlLabel>
            <FormControl
            name="username"
              value={this.state.username}
              onChange={this.handleChange}/>
          </FormGroup>
          { unameError && <p>enter valid username!!!</p> }
          <FormGroup bsSize="large">
            <ControlLabel>password</ControlLabel>
            <FormControl
              autoFocus
              type="text"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}/>       
             
          </FormGroup>
          {pwError && <p>enter valid password!!!</p>}
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
export default Login;
// var express=require('express')
// var mongoose=require('mongoose')
// var app=express()
// var path=require('path')
// var bodyParser=require('body-parser')
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// var schema=new mongoose.Schema({
//     firstname:String,
//     lastname:String,
//     phonenumber:String,
//     email:String,
//     password:String,
//     conformpassword:String
// })
// var user=mongoose.model('user',schema)
// mongoose.connect('mongodb://localhost/developer')
// app.use(express.static(path.resolve(__dirname,  '../dist')));
// app.get('/', (req, res) => {
// res.sendFile(path.resolve(__dirname,  '../dist', 'index.html'));
// })
// app.post('/reg',(req,res)=>{
//     user.create(req.body,(err ,data)=>{
//         if(err)console.log(err)
//         res.send(data)
//     })
// })
// app.listen(100,()=>console.log('sucess'))
