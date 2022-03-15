import { useEffect, useState } from 'react';
import './styles/Home.css';
import store from "../store/store"
import {fetchAll} from "../store/actionCreateDispatch"
import MyArticlePrev from './subcomponents/MyArticlepreview';
import NavBar from './subcomponents/NavBar';
import { decodeToken } from "react-jwt";
import { Navigate, useNavigate } from 'react-router-dom';

export default function MyArticles(){
  const [articles,setArticles]= useState(store.getState().articles);
  const decodedToken :any= decodeToken(store.getState().token);
  const navigate = useNavigate();

  useEffect(()=>{
    if((store.getState().token.length)<=0){
      navigate('/sign-in');
    }

    let articlesofstore=store.getState().articles
    if(!articlesofstore){
      fetchAll();
    }

    setArticles(articlesofstore);
    const unsubscribe=store.subscribe(() =>setArticles(store.getState().articles));
    
    return ()=>{
      if(unsubscribe){unsubscribe()}
    };
  },[]);

  const logged=()=>{
    if(store.getState().token.length <= 0)
      return false;
    else
      return true;
  }

  return(
    <>
    <NavBar></NavBar>
    
    {logged()?(articles.map(article=>(article.username==decodedToken.username)?<MyArticlePrev key={article._id} article={article}></MyArticlePrev>:'')):''}
    </>
  );
}
