'use server'
import { fetchAllCategory } from '@/API/categories'
import CategoryComponents from '@/components/admin/category/CategoryComponents'
import React from 'react'

const page = async () => {
    const categories = await fetchAllCategory()
    return (
        <div>
            <CategoryComponents categories={categories}></CategoryComponents>
        </div>
    )
}

export default page
