import { IVarriant } from "../varriant/varriant.interface"

export interface IProduct {
    _id?: string
    productName: string
    price: number
    discount: number
    description: string
    categoryId: string
    image: string
    averageStar: number
    varriants?: IVarriant[]
}

export interface IProductState {
    products: IProduct[]
}
export interface IProductSearchState {
    nameTerm: string
    products: IProduct[]
}