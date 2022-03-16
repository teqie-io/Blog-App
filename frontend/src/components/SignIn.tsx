import { useState } from "react";
import { Link,Navigate } from "react-router-dom";
import "./styles/LogSignUp.css";
import * as api from "../api/auth";
import { setToken } from "../store/actionCreateDispatch";

export default function Login(){
    const [user,setUser]=useState({username:"",password:""});
    const [redirect,setRedirect]=useState(false);
    const [redirectft,setRedirectFT]=useState(false);

    function handleChange(event:any)
    {
        const{name,value} = event.target;
        console.log(value);
        setUser(state => {
            return{
                ...state,
                [name]: value
            }
        })
    }

    function handleSubmit(event:any){
        event.preventDefault();
        api.signIn(user)
        .then(res=>{setToken(res.data);setRedirect(true);})
        .catch(err=>console.log(err))
        
    }

    function handleForgot(event:any){
        event.preventDefault();
        api.forgotPassword({username:user.username})
        .then(()=>setRedirectFT(true))
        .catch(err=>console.log(err))
    }

    return(
    <main>
        {redirect?<Navigate to='/'></Navigate>:''}
        {redirectft?<Navigate to={`/forgot/${user.username}`}></Navigate>:''}
        <h1 id="Qheading"><span>Blog <span className="add-color-green">A</span>pp</span> <Link id="homeuna" to="/">Home</Link></h1>
        
        <div className="wrapper">
            <h1>SignIn</h1>
            <form>
            <div id="form-content">
                <div id="fieldwrapper">
                    <label htmlFor="username">UserName: </label>
                    <input type="text" id="username" name="username" value={user.username} onChange={handleChange}></input>
                </div>
                <div id="fieldwrapper">
                    <label htmlFor="password">Password :</label><br/>
                    <input type="password" id="password" name="password" value={user.password} onChange={handleChange}/><br/>
                </div>                    
            </div>
            <button id="submit-button" type="submit" onClick={handleSubmit} >Sign In</button><br/>
            <button id="forgot-button" onClick={handleForgot} >Forgot Password</button><br/>
            <Link to="/sign-up" id="sign-up-link">Not already user? SIGN UP.</Link>
            </form>
		</div>
	</main>
    )
}