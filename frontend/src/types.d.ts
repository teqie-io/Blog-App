type Article={
    _id: any
    username: string
    imageUrl: string
    heading: string
    body: string
    published?: boolean
}

type ArticleAction={
    type:string,
    articles: Article[]
}

type StoreInit={
    token:string,
    articles:Article[]
}
