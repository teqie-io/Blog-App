import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import "./styles/LogSignUp.css";
import * as api from "../api/auth";


export default function Verify(){
    const [code,setCode]=useState('');
    const [redirect,setRedirect]=useState(false);
    const {username} = useParams();

    function handleChange(event:any)
    {
        setCode(event.target.value);
    }

    function handleSubmit(event:any){
        event.preventDefault();
        api.verifyEmail({username,code})
        .then(()=>{setRedirect(true);})
        .catch(err=>console.log(err))
        
    }
    return(
    <main>
        {redirect?<Navigate to='/sign-in'></Navigate>:''}
        <h1 id="Qheading">Blog <span className="add-color-green">A</span>pp</h1>
        <div className="wrapper">
            <h1>Verify Email</h1>
            <form>
            <div id="form-content">
                <div id="fieldwrapper">
                    <label htmlFor="code">OTP: </label>
                    <input type="text" id="code" name="code" value={code} onChange={handleChange}></input>
                </div>                   
            </div>
            <button id="submit-button" type="submit" onClick={handleSubmit} >Submit</button><br/>
            <Link to="/" id="sign-up-link">Skip</Link>
            </form>
		</div>
	</main>
    )
}