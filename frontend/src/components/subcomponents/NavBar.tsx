import { Link } from "react-router-dom";
import "./styles/header.css";
import store from "../../store/store";
import User from "./User";

export default function NavBar(){

  return(
  <header>
  <div id="heading-container">
    <h1 id="heading">Blog App</h1>
    <ul id="options">
      <Link className="option" to="/">Home</Link>
      <Link className="option" to="/addarticle">Add Article</Link>
      <Link className="option" to="/myarticles">My Articles</Link>
    </ul>
    {(store.getState().token.length > 0)?<User/>:''}
  </div>
</header>
  
  );
}