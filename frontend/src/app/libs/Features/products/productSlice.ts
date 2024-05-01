import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductState } from "./product.interface";

const initialProductState: IProductState = {
    products: []
}

const productClientSlice = createSlice({
    name: "products",
    initialState: initialProductState,
    reducers: ({
        listProductsClient: (state: IProductState, actions: PayloadAction<IProduct[]>) => {
            state.products = actions.payload
        },
    })
})

export const { listProductsClient } = productClientSlice.actions
export const productClientSliceReducer = productClientSlice.reducer