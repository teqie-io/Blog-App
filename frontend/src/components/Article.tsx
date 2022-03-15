import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {removeArticle, changeartStatus} from "../store/actionCreateDispatch";
import * as api from "../api/articles"
import NavBar from "./subcomponents/NavBar";

function ArticleCom(){
    const [article,setArticle]=useState({_id:0,username:"",heading:"",body:"",published:undefined});
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
        <div>
            <h2>{article.heading}</h2>
            <p>{article.body}</p><br/>
            <p>Author: {article.username}</p>
            <button onClick={()=>removeArticle(article)}>Delete</button>
            <button onClick={()=>changeartStatus(article)}>{article.published?"Draft":"Publish"}</button>
        </div>
        </>
    )
}

export default ArticleCom;