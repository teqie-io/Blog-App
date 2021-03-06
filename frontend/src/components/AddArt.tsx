import React from "react";
import { addArticle } from "../store/actionCreateDispatch";
import {Navigate} from "react-router-dom";
import NavBar from "./subcomponents/NavBar";
import store from "../store/store";
import "./styles/addArt.css"

class AddArt extends React.Component<{},{heading:string,imageUrl:string,body:string,published:boolean,redirect:boolean}>{

    constructor(props:{}){
        super(props);
        this.state={
            heading:"",
            imageUrl:"",
            body:"",
            published:true,
            redirect:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBody=this.updateBody.bind(this);
        this.updateHeading=this.updateHeading.bind(this);
        this.updateImageUrl=this.updateImageUrl.bind(this);
    }


    handleSubmit(event:any){
        addArticle({_id:0,username:'',...this.state});
        event.preventDefault();
        this.setState({redirect:true});
    }

    updateHeading(event:any){
        this.setState({heading:event.target.value});
    }

    updateBody(event:any){
        this.setState({body:event.target.value})
    }

    updateImageUrl(event:any){
        this.setState({imageUrl:event.target.value})
    }

    render(): React.ReactNode {
        if(this.state.redirect){return (<Navigate to='/'></Navigate>)}
        return(
            <>
            <NavBar></NavBar>
            {(store.getState().token.length)<=0 ? <Navigate to='/sign-in'></Navigate>:''}
            <form id="addArticle" onSubmit={this.handleSubmit}>
                Heading: <textarea id="artheading" value={this.state.heading} onChange={this.updateHeading }/>
                Image URL: <input type="text" value={this.state.imageUrl} onChange={this.updateImageUrl }/>
                Body: <textarea value={this.state.body} onChange={this.updateBody}></textarea>
                <input id="button" type="submit" value="Submit"/>
            </form>
            </>
        ); 
    }
}

export default AddArt