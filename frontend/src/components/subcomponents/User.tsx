import { decodeToken } from "react-jwt";
import store from "../../store/store";
import userimage from "./img/user-solid.svg";

export default function User(){

    const decodedToken :any= decodeToken(store.getState().token);

    return(
    <div id="userinfo">
        <img src={userimage}/>
        <div id="name-n-logbutton">
            <h2>{decodedToken.username}</h2>
            <a id="logout-button">Log Out</a>
        </div>
    </div>);
}