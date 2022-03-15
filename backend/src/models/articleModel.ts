import mongoose from "mongoose";

interface ArticleInterface extends mongoose.Document {
    username:string,
    imageUrl:string,
    heading: string,
    body:string,
    published:boolean
}
  
const articleSchema= new mongoose.Schema<ArticleInterface>({
    username:String,
    imageUrl:String,
    heading:String,
    body:String,
    published:Boolean
})

var ArticleModel=mongoose.model('ArticleModel',articleSchema);

export default ArticleModel;