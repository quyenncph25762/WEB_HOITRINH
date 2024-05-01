'use server'

import { IProductQuanlity } from "@/app/libs/Features/productQuanlity/productQuanlity.interface"
const url = 'http://localhost:3000/api'
export const fetchAllProductQuanlity = async () => {
    try {
        const res = await fetch(`${url}/productQuanlity`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["productsQuanlity"]
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const fetchOneProductQuanlity = async (_id?: string) => {
    try {
        const res = await fetch(`${url}/productQuanlity/${_id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["productsQuanlity"]
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}