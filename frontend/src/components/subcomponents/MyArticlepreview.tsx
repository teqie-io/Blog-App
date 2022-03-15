import React from "react";
import { changeartStatus, removeArticle } from '../../store/actionCreateDispatch';
import {Link} from 'react-router-dom';
import "./styles/articlePreview.css";

class ArticlePrev extends React.Component<{article:Article},{}>{
    constructor(props:{article:Article}){
        super(props);
    }
    render(){
        return(
        <div id="articleprev">
            <img src={this.props.article.imageUrl}></img>
            <div id="articleprevhu">
                <h2>{this.props.article.heading}</h2>
                <p>Author: {this.props.article.username}</p>
                <div id="articleprevbutns">
                    <button className="button" onClick={()=>removeArticle(this.props.article)}>Delete</button>
                    <button className="button" onClick={()=>changeartStatus(this.props.article)}>{this.props.article.published?"Draft":"Publish"}</button>
                    <Link className="button" to={`/edit/${this.props.article._id}`}><button>Edit</button></Link>
                </div>
            </div>
            <Link to={`/article/${this.props.article._id}`}><button>View More</button></Link>

            

        </div>
        );
    }
}

export default ArticlePrev;