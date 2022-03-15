import React from "react";
import { changeartStatus, removeArticle } from '../../store/actionCreateDispatch';
import {Link} from 'react-router-dom';

class ArticlePrev extends React.Component<{article:Article},{}>{
    constructor(props:{article:Article}){
        super(props);
    }
    render(){
        return(
        <div>
            <h2>{this.props.article.heading}</h2>
            <p>{this.props.article.body}</p><br/>
            <p>Author: {this.props.article.username}</p>
            <button onClick={()=>removeArticle(this.props.article)}>Delete</button>
            <button onClick={()=>changeartStatus(this.props.article)}>{this.props.article.published?"Draft":"Publish"}</button>
            <Link to={`/article/${this.props.article._id}`}><button>View More</button></Link>
            <Link to={`/edit/${this.props.article._id}`}><button>Edit</button></Link>
        </div>
        );
    }
}

export default ArticlePrev;