import { Link } from "react-router-dom";


export default function NavBar(){
    return(
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/addarticle">Add Article</Link></li>
      </ul>
    )
}