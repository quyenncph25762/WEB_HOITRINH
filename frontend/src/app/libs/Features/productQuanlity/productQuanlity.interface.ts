'use client'


export interface IProductQuanlity {
    _id?: string
    title: string
    image: string
    description: string
}
export interface IProductQuantityState {
    productsQuantity: IProductQuanlity[]
}

