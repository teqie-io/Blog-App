import { useState } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import "./styles/LogSignUp.css";
import * as api from "../api/auth";


export default function Forgot(){
    const [user,setUser]=useState({password:'',code:''});
    const [redirect,setRedirect]=useState(false);
    const {username} = useParams();

    function handleChange(event:any)
    {
        const{name,value} = event.target;
        setUser(state => {
            return{
                ...state,
                [name]: value
            }
        })
    }

    function handleSubmit(event:any){
        event.preventDefault();
        console.log({username,password:user.password,code:user.code});
        api.confirmPassword({username,password:user.password,code:user.code})
        .then(()=>{setRedirect(true);})
        .catch(err=>console.log(err))
        
    }
    return(
    <main>
        {redirect?<Navigate to='/sign-in'></Navigate>:''}
        <h1 id="Qheading"><span>Blog <span className="add-color-green">A</span>pp</span> <Link id="homeuna" to="/">Home</Link></h1>
        <div className="wrapper">
            <h1>Set New Password</h1>
            <form>
            <div id="form-content">
            <div id="fieldwrapper">
                    <label htmlFor="password">New Password: </label>
                    <input type="text" id="password" name="password" value={user.password} onChange={handleChange}></input>
                </div>
                <div id="fieldwrapper">
                    <label htmlFor="code">OTP: </label>
                    <input type="text" id="code" name="code" value={user.code} onChange={handleChange}></input>
                </div>                   
            </div>
            <button id="submit-button" type="submit" onClick={handleSubmit} >Submit</button><br/>
            </form>
		</div>
	</main>
    )
}