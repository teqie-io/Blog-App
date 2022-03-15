import axios from "axios";
import store from "../store/store";

const url = "http://localhost:5000/articles";

function getToken(){
    console.log(store.getState().token);
    return store.getState().token;
}

export const fetchArticles = ()=> axios.get(url);
export const getArticleById = (id)=>axios.get(`${url}/${id}`);
export const addArticle = (newArticle)=>axios.post(url, {...newArticle,token:getToken()});
export const removeArticle = (id)=>axios.patch(`${url}/remove/${id}`,{token:getToken()});
export const updateArticle = (id,updateArticle)=>axios.patch(`${url}/${id}`,{...updateArticle,token:getToken()});
export const changeStatusArticle = (id)=>axios.patch(`${url}/changestatus/${id}`,{token:getToken()});

