'use client'

import { configureStore } from "@reduxjs/toolkit"
import { productQuanlityReducer } from "./Features/productQuanlity/productQuanlity"
import { newsReducer } from "./Features/news/news"

export const store = configureStore({
    reducer: {
        productQuantityReducer: productQuanlityReducer,
        newsReducer: newsReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch