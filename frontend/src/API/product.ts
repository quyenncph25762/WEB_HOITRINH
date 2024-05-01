import { IProduct } from "@/app/libs/Features/products/product.interface"
import { revalidateTag } from "next/cache"

const url = `http://localhost:3000/api`

export const fetchAllProduct = async () => {
    try {
        const res = await fetch(`${url}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["products"]
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const fetchOneProduct = async (id: string) => {
    try {
        const res = await fetch(`${url}/products/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["products"]
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const deleteProduct = async (id: string) => {
    try {
        const res = await fetch(`${url}/products/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["products"]
            }
        })
        revalidateTag("products")
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const addProduct = async (product: IProduct) => {
    try {
        const res = await fetch(`${url}/products`, {
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            },
        })
        revalidateTag("products")
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const updateProduct = async (id: string, product: IProduct) => {
    try {
        const res = await fetch(`${url}/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                "Content-Type": "application/json"
            },
        })
        revalidateTag("products")
        return res.json()
    } catch (error) {
        console.log(error)
    }
}