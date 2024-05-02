import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IProductSearchState, IProductState } from "./product.interface";

const initialProductState: IProductState = {
    products: []
}
const initialProductSearchState: IProductSearchState = {
    nameTerm: "",
    products: []
}

const productClientSlice = createSlice({
    name: "products",
    initialState: initialProductSearchState,
    reducers: ({
        listProductsClient: (state: IProductState, actions: PayloadAction<IProduct[]>) => {
            state.products = actions.payload
        },
        listProductByCategoryClients: (state: IProductState, actions: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.categoryId === actions.payload)
        },
        searchProductBynameClients: (state: IProductSearchState, actions: PayloadAction<IProductSearchState>) => {
            const nameSearch = actions.payload.nameTerm.trim().toLowerCase()
            console.log(nameSearch)
            state.products = actions.payload.products.filter((product) => product.productName && product.productName.trim().toLowerCase().includes(nameSearch))
        }
    })
})

export const { listProductsClient, listProductByCategoryClients, searchProductBynameClients } = productClientSlice.actions
export const productClientSliceReducer = productClientSlice.reducer