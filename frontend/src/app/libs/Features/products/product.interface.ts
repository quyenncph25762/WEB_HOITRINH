import { IVarriant } from "../varriant/varriant.interface"

export interface IProduct {
    _id?: string
    title: string
    price: number
    discount: number
    description: string
    categoryId: string
    varriants: IVarriant[]
}

export interface IProductState {
    products: IProduct[]
}