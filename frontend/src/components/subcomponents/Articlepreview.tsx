import React from "react";
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
            </div>
            <Link to={`/article/${this.props.article._id}`}><button>View More</button></Link>
        </div>
        );
    }
}

export default ArticlePrev;