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
            <img src={this.props.article.imageUrl}></img>
            <p>Author: {this.props.article.username}</p>
            <Link to={`/article/${this.props.article._id}`}><button>View More</button></Link>
        </div>
        );
    }
}

export default ArticlePrev;