import React, {useState} from "react"

import axios from "axios"
import { useNavigate } from "react-router-dom"

const navigate =useNavigate
export const Login = () => {

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const emailhandler = (event) => {
        
        setUser((prevState)=>{
            return{
            ...prevState,
            email:event.target.value
            }
        })
    }

    const passwordhandler = (event) => {
        setUser((prevState)=>{
            return{
            ...prevState,
            email:event.target.value
            }
        })
        
        
    }
    const loginhandler =(event)=>{
        event.preventDefault();
        axios.post('http://localhost:4001/user/login',user,{
            headers:{
                'content-type':'application/json'
            }
        }).then(response=>console.log(response))
        .catch(error=>console.log(error))
    }

    return (
       <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="small-box mx-auto">
                        <form onSubmit={loginhandler}>
                            <div className="form-container p-4 mx-auto">
                                <h1>Login</h1>
                                <div className="mb-3">
                                    <input type='text'className="form-control"placeholder="Email"onChange={emailhandler}/>
                                </div>
                                <div className="mb-3">
                                    <input type='password'className="form-control"placeholder="Password"onChange={passwordhandler}/>
                                </div>
                                <div className="mb-3">
                                    <input type='submit'className="btn btn-primary"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Login