'use server'

import { ICategory } from "@/app/libs/Features/categories/category.interface"
import { revalidateTag } from "next/cache"

const url = `http://localhost:3000/api`

export const fetchAllCategory = async () => {
    try {
        const res = await fetch(`${url}/categories`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["categories"]
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const fetchOneCategory = async (id?: string) => {
    try {
        const res = await fetch(`${url}/categories/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["categories"]
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const updateCategory = async (id: string, category: ICategory) => {
    try {
        const res = await fetch(`${url}/categories/update/${id}`, {
            method: "PUT",
            body: JSON.stringify(category),
            headers: {
                "Content-Type": "application/json"
            },
        })
        revalidateTag("categories")
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const removeCategory = async (id?: string) => {
    try {
        const res = await fetch(`${url}/categories/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        revalidateTag("categories")
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const addCategory = async (category: ICategory) => {
    try {
        const res = await fetch(`${url}/categories/add`, {
            method: "POST",
            body: JSON.stringify(category),
            headers: {
                "Content-Type": "application/json"
            },
        })
        revalidateTag("categories")
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
