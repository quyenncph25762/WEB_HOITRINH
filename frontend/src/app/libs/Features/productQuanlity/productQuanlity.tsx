import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProductQuanlity, IProductQuantityState } from "./productQuanlity.interface"

export const initialState: IProductQuantityState = {
    productsQuantity: []
}

const productQuanlitySlice = createSlice({
    name: "productsQuanlity",
    initialState: initialState,
    reducers: ({
        listProductQuanlitySlice: (state: IProductQuantityState, actions: PayloadAction<IProductQuanlity[]>) => {
            state.productsQuantity = actions.payload
        }
    })
})

export const { listProductQuanlitySlice } = productQuanlitySlice.actions

export const productQuanlityReducer = productQuanlitySlice.reducer