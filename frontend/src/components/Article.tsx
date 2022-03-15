import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {removeArticle, changeartStatus} from "../store/actionCreateDispatch";
import * as api from "../api/articles"
import NavBar from "./subcomponents/NavBar";
import "./styles/article.css"

function ArticleCom(){
    const [article,setArticle]=useState({_id:0,username:"",imageUrl:"",heading:"",body:"",published:undefined});
    const {id} = useParams();
    const update = async ()=>{
        try{
            const {data}= await api.getArticleById(id);
            console.log(data);
            setArticle(data);
        }catch(err){
            console.log(err);
        }
        
    }
    useEffect(()=>{
        // api.getArticleById(id)
        // .then(res=>{setArticle(res.data)})
        // .catch(err=>{console.log(err)})
        update()
    },[]);
    return(
        <><NavBar></NavBar>
        <div id="viewmorearticle">
            <h2 id="artheading">{article.heading}</h2>
            <img src={article.imageUrl}></img>
            <p>Author: {article.username}</p>
            <p id="artbody">{article.body}</p><br/>
        </div>
        </>
    )
}

export default ArticleCom;