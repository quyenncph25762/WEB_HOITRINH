'use server'

const url = `http://localhost:3000/api`

export const fetchAllNews = async () => {
    try {
        const res = await fetch(`${url}/news`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["news"]
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}
export const fetchOneNews = async (id?: string) => {
    try {
        const res = await fetch(`${url}/news/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            next: {
                tags: ["news"]
            }
        })
        return res.json()
    } catch (error) {
        console.log(error)
    }
}