import axios from "axios";

const url = "http://localhost:5000/articles";

export const fetchArticles = ()=> axios.get(url);
export const getArticleById = (id)=>axios.get(`${url}/${id}`);
export const addArticle = (newArticle)=>axios.post(url, newArticle);
export const removeArticle = (id)=>axios.delete(`${url}/${id}`);
export const updateArticle = (id,updateArticle)=>axios.patch(`${url}/${id}`,updateArticle);
export const changeStatusArticle = (id)=>axios.patch(`${url}/changestatus/${id}`);

