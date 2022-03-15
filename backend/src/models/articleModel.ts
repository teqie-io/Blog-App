import mongoose from "mongoose";

interface ArticleInterface extends mongoose.Document {
    username:string,
    heading: string,
    body:string,
    published:boolean
}
  
const articleSchema= new mongoose.Schema<ArticleInterface>({
    username:String,
    heading:String,
    body:String,
    published:Boolean
})

var ArticleModel=mongoose.model('ArticleModel',articleSchema);

export default ArticleModel;