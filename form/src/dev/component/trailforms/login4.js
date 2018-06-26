// import React,{Component} from 'react';
// import { reactLocalStorage } from 'reactjs-localstorage';
// import {FormControl,FormGroup,ControlLabel,Button} from 'react-bootstrap';
// class Login4 extends Component{
//     state={
//         username:"",
//         unameError:"",
//         password:"",
//         pwError:"",
//         credentials_error:false,
//     }
//     componentDidMount(){
//         reactLocalStorage.setObject('user',{})
//     }
//     validateForm(){
//         this.state.username.length<5 && this.state.password.length<5
//     }
//     handleChange=event=>{
//         this.setState({
//             [event.target.name]:event.target.value
//         })
//     }
//     handleSubmit=event=>{
//         const{username,password}=this.state
//         if(username!=="admin" || password!=="admin"){
//             if(username!=="admin"){
//                 this.setState({unameError:true})
//             }else{
//                 this.setState({unameError:false})
//             }
//             if(password!=="admin"){
//                 this.setState({pwError:true})
//             }else{
//                 this.setState({pwError:false})
//             }
//         }else{
//             fetch('/Login', {
//                 method: 'POST',
//                 headers: {
//                   'Accept': 'application/json',
//                   'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username,password })
//               }).then(res => res.json())
//               .then(res=> console.log(res))


//                 // this.props.history.push('/Page')
//             }
//             event.preventDefault()
//         }
    

//     render(){
//         const{unameError,pwError}=this.state
//         return(
//             <form>
//                 <div>
//                     <FormGroup bsSize="large">
//                     <ControlLabel>username</ControlLabel>
//                     <FormControl 
//                     name="username"
//                     value={this.state.username}
//                     onChange={this.handleChange}/>
//                     </FormGroup>
//                     {unameError && <p>please enter valid username</p>}
//                     <FormGroup bsSize="large">
//                     <ControlLabel>password</ControlLabel>
//                     <FormControl 
//                     name="password"
//                     value={this.state.password}
//                     onChange={this.handleChange}/>
//                     </FormGroup>
//                     {pwError && <p>please enter valid password</p>}
//                     <Button
//             block
//             bsSize="large"
//             // disabled={!this.validateForm()}
//             onClick={this.handleSubmit}
//             type="submit">
//             Login
//           </Button>
//                     </div>
//                     </form>
//         )
//     }
// }
// export default Login4
// import React from 'react-bootstrap';
// class App extends Components{
//     state={
//         username:"",
//         usernameError:"",
//         email:"",
//         emailError:"",
//         password:"",
//         passwordError:"",
//         conformpassword:"",
//         conformpasswordError:""
//     }
//     componentDidMount(){
//         reactLocalStorage.setObject('user',{})
//     }
//     handleChange=event=>{
//         this.setState({
//             [event.target.name]:event.target.value
//         })
//         onsubmit=event=>{
//             const{username,email,password,conformpassword}=this.state
//             if(username===""||email===""||password===""||conformpassword==="")
//             if(username===""){
//                 this.setState({username:true})
//             }else{
//                 this.setState({unameError:false})
//             }
//             if(email===""){
//                 this.setState({emailError:true})
//             }else{
//                 this.setState({emailError:false})
//             }
//             if(password===""){
//                 this.setState({passwordError:true})
//             }else{
//                 this.setState({passwordError:false})
//                 }
//                 if(conformpassword){
//                     this.setState({passwordError:true})
//                 }else{
//                     this.setState({passwordError:false})
//                     fetch:'/rej',{
//                     method:'POST',
//                     headers:
//                     'Accept':'application/json',
//                 }

//                 }
//             }
//         }
//     }
// }