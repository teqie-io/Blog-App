import * as actions from "./actionTypes"

const initialState:StoreInit={
  token:'',
  articles:[]
}


export default function reducer(state:StoreInit=initialState,action:any):StoreInit{
    switch(action.type){
      case actions.FetchAll:
        return{
          ...state,
          articles:action.articles
        }

        case actions.ArticleAdded:
            return{
              ...state,
              articles:state.articles.concat(action.articles[0])
          }
        
        case actions.ArticleRemoved:
            return {
              ...state,
              articles:state.articles.filter(article=>article._id!==action.articles[0]._id)
            }

        case actions.DraftedPublished:
            return {
              ...state,
              articles:state.articles.map(article=>article._id!==action.articles[0]._id?article:{...article,published:!article.published})
            }

        case actions.ArticleUpdated:
          const {heading,body,published}=action.articles[0];
          return {
            ...state,
            articles:state.articles.map(article=>article._id!==action.articles[0]._id?article:{...article,heading,body,published})
          }

        case actions.SetToken:
          const token=action.token;
          return{
            ...state,
            token
          }

        default:
            return state
    }
}