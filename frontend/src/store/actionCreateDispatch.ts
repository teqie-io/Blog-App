import * as actions from "./actionTypes"
import store from "./store"
import * as api from "../api/articles"

export async function fetchAll(){
    try{
        let {data}= await api.fetchArticles();
        if((store.getState().token.length)>0){
            let mydata;
            await api.getMyArticles()
            .then(res=>mydata=res.data)
            .catch(err=>console.log(err));
            data=data.concat(mydata)
        }
        const action={
            type:actions.FetchAll,
            articles:data
        }
        store.dispatch(action);
    }catch(err){
        console.log(err)
    }
}

export async function addArticle(article: Article){
    try{
        const {data}= await api.addArticle(article);
        const action:ArticleAction= {
            type:actions.ArticleAdded,
            articles:[data]
        }
        store.dispatch(action)
    }catch(err){
        console.log(err);
    }
}

export async function removeArticle(article: Article){
    try{
        const {data}=await api.removeArticle(article._id);
        
        const action:ArticleAction= {
            type:actions.ArticleRemoved,
            articles:[article]
        }
        store.dispatch(action)
    }catch(err){
        console.log(err);
    }
    
}

export async function changeartStatus(article: Article){
    try{
        await api.changeStatusArticle(article._id);
        const action:ArticleAction= {
            type:actions.DraftedPublished,
            articles:[article]
        }
        store.dispatch(action)
    }catch(err){
        console.log(err);
    }
}

export async function updateArticle(article:Article) {
    try{
        await api.updateArticle(article._id,article);
        const action:ArticleAction={
            type:actions.ArticleUpdated,
            articles:[article]
        }
        store.dispatch(action)
    }catch(err){
        console.log(err);
    }
}

export function setToken(token:string){
    const action:{type: string,token:string}={
        type:actions.SetToken,
        token
    }
    store.dispatch(action)
}