import { fetchOneCategory } from '@/API/categories'
import CategoryUpdateComponents from '@/components/admin/category/CategoryUpdateComponents'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
    const getOneCategory = await fetchOneCategory(params?.id)
    return (
        <div>
            <CategoryUpdateComponents id={params.id} getOneCategory={getOneCategory && getOneCategory}></CategoryUpdateComponents>
        </div>
    )
}

export default page
