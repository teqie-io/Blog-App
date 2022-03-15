import mongoose from "mongoose";
import {Request, Response } from "express";
import ArticleModel from "../models/articleModel";
import getUsername from "./function/getusername";


export const getArticles= async(req:Request,res:Response)=>{
    try{
        const articles = await ArticleModel.find({published:true});
        console.log("getArticles");
        res.status(200).json(articles);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const getMyArticles= async(req:Request,res:Response)=>{
    const {token}=req.body;
    const username=getUsername(token);
    console.log("getMYArticles");
    try{
        const articles = await ArticleModel.find({username,published:false});
        console.log(articles);
        res.status(200).json(articles);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const getArticleById= async(req:Request,res:Response)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post with Id: ${id}`);
    try{
        const article = await ArticleModel.findById(id);
        res.status(200).json(article);
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const addArticle= async(req:Request,res:Response)=>{
    const {token,imageUrl, heading, body, published}=req.body;
    const username = getUsername(token);

    const newArticle =  new ArticleModel({ username, imageUrl,heading, body, published});
    try{
        await newArticle.save();
        res.status(201).json(newArticle);
    }catch(err){
        res.status(409).json({message:err.message});
    }
}

export const removeArticle=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {token}=req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post with Id: ${id}`);
    
    try{
        const article = await ArticleModel.findById(id);
        
        if(article.username==getUsername(token)){
            await ArticleModel.findByIdAndDelete(id);
            res.json({message: "Article Removed successfully."});
        }else{
            res.status(404).json({message: "notAllowed"});
        }
    }catch(err){
        res.status(404).json({message: err.message});
    }

}

export const changeStatusArticle=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {token}=req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post with Id: ${id}`);

    try{
        const article = await ArticleModel.findById(id);
        
        if(article.username==getUsername(token)){
            const updatedArticle= await ArticleModel.findByIdAndUpdate(id,{published:!article.published},{new:true});
            res.json(updatedArticle);
        }else{
            res.status(404).json({message: "notAllowed"});
        }
    }catch(err){
        res.status(404).json({message: err.message});
    }
}

export const updateArticle=async(req:Request,res:Response)=>{
    const {id}=req.params;
    const {token, imageUrl, heading, body, published}=req.body;
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Post with Id: ${id}`);

    try{
        const article = await ArticleModel.findById(id);
        
        if(article.username==getUsername(token)){
            const updatedArticle= await ArticleModel.findByIdAndUpdate(id,{imageUrl, heading, body, published},{new:true});
            res.json(updatedArticle);
        }else{
            res.status(404).json({message: "notAllowed"});
        }
    }catch(err){
        res.status(404).json({message: err.message});
    }
}