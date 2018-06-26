import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom'; 
// import Login3 from './component/login3';
// import RegForm from './component/regform';
// import Upload from './component/form/upload';
// import LoginForm2 from './component/form/loginform2';
import AddDirectors from './component/form/adddirectors';
import Page from './component/page';
import { reactLocalStorage } from 'reactjs-localstorage';
class App extends Component{
    state={
        username:"",
        password:"",
        email:"",
        phonenumber:""
    }
    render(){
        const{username,password}=reactLocalStorage.setObject('user')
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={AddDirectors} />             
               
                    <Route path="/Page" component={Page}/>
                    </Switch>
            </div>
        )
    }
}
export default App;