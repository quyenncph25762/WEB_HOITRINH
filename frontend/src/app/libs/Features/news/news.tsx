import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { INews, INewsState } from "./news.interface"
const initialStateNews: INewsState = {
    news: []
}

const newsSlice = createSlice({
    name: "news",
    initialState: initialStateNews,
    reducers: ({
        getAllNewsSlice: (state: INewsState, actions: PayloadAction<INews[]>) => {
            state.news = actions.payload
        }
    })
})

export const { getAllNewsSlice } = newsSlice.actions

export const newsReducer = newsSlice.reducer