export interface INews {
    _id?: string
    title: string
    image: string
    description: string
}

export interface INewsState {
    news: INews[]
}