import { decodeToken } from "react-jwt";
import { setToken } from "../../store/actionCreateDispatch";
import store from "../../store/store";
import userimage from "./img/user-solid.svg";
import {  useNavigate } from 'react-router-dom';

export default function User(){

    const decodedToken :any= decodeToken(store.getState().token);
    const navigate = useNavigate();

    const handleLogout=(event:any)=>{
        event.preventDefault();
        setToken('');
        navigate('/sign-in');
    }

    return(
    <div id="userinfo">
        <img src={userimage}/>
        <div id="name-n-logbutton">
            <h2>{decodedToken.username}</h2>
            <button onClick={handleLogout} id="logout-button">Log Out</button>
        </div>
    </div>);
}