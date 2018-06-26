import React,{Component} from 'react';
class Upload extends Component{
    state={
        myimg:""
    }
    componentDidMount(){
        fetch("/getting/5b2e31c847fda00e806d070c",{
            method:"GET"
        }).then(res=>res.json())
        .then( res=>this.setState({myimg:res.img}) )
    }
        added=e=>{
             var fReader= new FileReader();
            fReader.readAsDataURL(e.target.files[0]);
            const scope=this
            fReader.onloadend=function(event){
                fetch('/adding',{
                    method:'POST',
                   headers:{
                       'Accept':'application/json',
                       'Content-Type':'application/json',
                    },
                   body:JSON.stringify({img:event.target.result})
               }).then(res=>res.json())
                .then(res=>console.log(res))
            }
        }
        render(){
            return(
                <div>    
            <input type="file" onChange={this.added}/>
                   
                    { this.state.myimg && 
                        <a href={this.state.myimg} download>download</a>
                    } 

                    </div>
            )
        }
    }
export default Upload;