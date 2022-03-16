import { useState } from "react";
import "./styles/LogSignUp.css";
import * as api from "../api/auth";
import { Navigate, Link } from "react-router-dom";

export default function SignUp(){
    const [user,setUser]=useState({username:"",password:"",name : "",family_name : "",email : "",birthdate : ""});
    const [redirect,setRedirect]=useState(false);

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
        api.signUp(user)
        .then(()=>setRedirect(true))
        .catch(err=>console.log(err))
    }

    return(
    <main>
        {redirect?<Navigate to={`/verify/${user.username}`}></Navigate>:''}
        <h1 id="Qheading"><span>Blog <span className="add-color-green">A</span>pp</span> <Link id="homeuna" to="/">Home</Link></h1>
        <div className="wrapper">
            <h1>Sign UP</h1>
            <form>
            <div id="form-content">
                <div id="fieldwrapper">
                    <label htmlFor="email">Email   :</label><br/>
                    <input type="text" name="email" id="email" onChange={handleChange}/><br/>
                </div>
                <div id="fieldwrapper">
                    <label htmlFor="password">Password :</label><br/>
                    <input type="password" name="password" id="password" onChange={handleChange}/><br/>
                    <label className="sublabel" htmlFor="password">Password must contain a capital letter, 
                    special symbol.</label><br/>
                </div>
                <div id="fieldwrapper">
                    <label htmlFor="name">First Name: </label>
                    <input type="text" id="name" name="name" onChange={handleChange}></input>
                </div>
                <div id="fieldwrapper">
                    <label htmlFor="family-name">Family Name: </label>
                    <input type="text" id="family-name" name="family_name" onChange={handleChange}></input>
                </div>
                <div id="fieldwrapper">
                    <label htmlFor="username">UserName: </label>
                    <input type="text" id="username" name="username" onChange={handleChange}></input>
                </div>                    
                <div id="fieldwrapper">
                    <label htmlFor="bdate">Birth Date: </label>
                    <input type="date" id="bdate" name="birthdate" onChange={handleChange}></input>
                </div>
            </div>
            <button id="submit-button" type="submit" name="save" onClick={handleSubmit} >SignUP</button><br/>
            </form>
		</div>
	</main>
    )
}