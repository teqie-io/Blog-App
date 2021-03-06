import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {updateArticle} from "../store/actionCreateDispatch";
import * as api from "../api/articles"
import {Navigate} from "react-router-dom";
import NavBar from "./subcomponents/NavBar";
import store from "../store/store";
import "./styles/addArt.css"

function ArticleCom(){
    const [article,setArticle]=useState({_id:0,imageUrl:"", username:"",heading:"",body:"",published:undefined});
    const [redirect,setRedirect]=useState(false);

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

    function handleChange(event:any)
    {
        const{name,value} = event.target;
        console.log(value);
        setArticle(state => {
            return{
                ...state,
                [name]: value
            }
        })
    }

    function handleSubmit(event:any){
        event.preventDefault();
        updateArticle(article);
        setRedirect(true);
    }

    return(
    <>
    <NavBar></NavBar>
    <div>
        {redirect?<Navigate to='/myarticles'></Navigate>:''}
        {(store.getState().token.length)<=0 ? <Navigate to='/sign-in'></Navigate>:''}
        <form id="addArticle" action="/" onSubmit={handleSubmit}>
            Heading: <textarea id="artheading" name="heading" value={article.heading} onChange={handleChange }/>
            Image URL: <textarea name="imageUrl" value={article.imageUrl} onChange={handleChange }/>
            Body: <textarea name="body" value={article.body} onChange={handleChange}></textarea>
            <input id="button" type="submit" value="Submit"/>
        </form>
    </div>
    </>
    )
}

export default ArticleCom;