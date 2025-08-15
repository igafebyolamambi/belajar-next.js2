'use client'

import { useEffect, useState } from "react"

export default function Notes(){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://service.pace11.my.id/api/notes')
        .then((res) => res.json())
        .then((data) => setData(data?.data || []))
        .finally(() => setLoading(false))
    }, [])

    if (loading) return <div>Loading...</div>

    return (
        <ul>
            {data?.map((el) => (
                <li key={el.id}>
                    {el.title}
                </li>
            )) || []}
        </ul>
    )
}