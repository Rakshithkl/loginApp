import React ,{Component} from 'react';
import { reactLocalStorage } from 'reactjs-localstorage';
import {ControlLabel,FormGroup,FormControl,Button,male,female} from 'react-bootstrap';
import '../component/regform.css';
class RegForm extends Component{
    state={
        firstname:"",
        firstnameError:false,
        lastname:"",
        lastnameError:false,
        phonenumber:"",
        phonenumberError:false,
        email:"",
        emailError:false,
        password:"",
        passwordError:false,
        conformpassword:"",
        conformpasswordError:false,
        gender:"Male",
        form:""
    }
    componentDidMount(){
        reactLocalStorage.setObject('user',{})
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    onSubmit=e=>{
        // console.log(this.state)
        e.preventDefault()
        const{firstname,lastname,phonenumber,email,password,conformpassword,gender}=this.state
        if(firstname==="" ||lastname==="" ||phonenumber===""||email===""||password===""||password!==conformpassword){
            if(firstname===""){
                this.setState({firstnameError:true})
            }else{
                this.setState({firstnameError:false})
            }
            if(lastname===""){
                this.setState({lastnameError:true})
            }else{
                this.setState({lastnameError:false})
            }
            if(phonenumber===""){
                this.setState({phonenumberError:true})
                // console.log(this.state.phonenumberError)
            }else{
                this.setState({phonenumberError:false})
            }
            if(email===""){
                this.setState({emailError:true})
            }else{
                this.setState({emailError:false})
            }
            if(password===""){
                this.setState({passwordError:true})
            }else{
                this.setState({passwordError:false})
            }
            if(password!==conformpassword){
                this.setState({conformpasswordError:true})
            }
            console.log("hello12")
            
        }else{
            console.log("hello")
                this.setState({conformpasswordError:false})
                fetch('/reg', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/json',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ firstname,lastname,phonenumber,email,password,gender })
                  }).then(res => res.json())
                  .then(res=> console.log(res))
           this.props.history.push('/Page')
            }
         }    
         upload=e=>{
             var fReader=new FileReader();
             fReader.readAsDataURL(e.target.files[0]);
             const scope=this
             fReader.onloadend=function(event){
                 scope.setState({form:event.target.result})
                 console.log(event.target.result)
                 fetch('/upload',{
                     method:'POST',
                     headers:{
                         'Accept':'application/json',
                         'Content-Type':'application/json'
                     },
                     body:JSON.stringify({upload:event.target.result})
                 }).then(res=>res.json())
                 .then(res=>scope.setState(console.log(res)))
             }
         }    
         submit =e=>{
             console.log(this.state)
         }    
        render(){
            const{firstnameError,lastnameError,phonenumberError,emailError,passwordError,conformpasswordError,gender}=this.state
        return(
         <div className="RegForm">
         <h3>regform</h3>
         <form>
             <FormGroup bsSize="large">
             <ControlLabel>firstname</ControlLabel>
             <FormControl 
             onChange={this.handleChange}
             name="firstname"/>
             </FormGroup>
             {firstnameError && <p>enter valid firstname</p>}
             <FormGroup bsSize="large">
             <ControlLabel>lastname</ControlLabel>
             <FormControl 
             onChange={this.handleChange}
             name="lastname"/>
             </FormGroup>
             {lastnameError && <p>enter valid lastname</p>}
             <FormGroup bsSize="large">
             <ControlLabel>phonenumber</ControlLabel>
             <FormControl 
             onChange={this.handleChange}
             name="phonenumber"/>
             </FormGroup>
             {firstnameError && <p>enter valid phonenumber</p>}
             <FormGroup bsSize="large">
             <ControlLabel>Email</ControlLabel>
             <FormControl 
             onChange={this.handleChange}
             name="email"/>
             </FormGroup>
             {emailError && <p>enter valid email id</p>}
             <FormGroup bsSize="large">
             <ControlLabel>password</ControlLabel>
             <FormControl 
             onChange={this.handleChange}
             name="password"/>
             </FormGroup>
             {passwordError && <p>enter valid password</p>}
             <FormGroup bsSize="large">
             <ControlLabel>Conformpassword</ControlLabel>
             <FormControl 
             onChange={this.handleChange}
             name="conformpassword"/>
             </FormGroup>
             {passwordError && <p>Incorrect Password</p>}
            gender
             <select onChange={this.handleChange} name="gender"  >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
             </select>
             
                 <div>
                     <input type="file" onChange={this.upload}/>
                     {
                         this.state.form &&
                         <a href={this.state.form} download>download</a>
                     }
                     {
                         this.state.CRMFORM &&
                         <img src={this.state.CRMFORM}/>
                     }
                     {/* <button onClick={this.submit}>dubmit</button> */}
                    </div>
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

        export default RegForm;
    
