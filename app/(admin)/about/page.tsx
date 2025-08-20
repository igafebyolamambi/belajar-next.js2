'use client'

import { useCount } from "@/context"

export default function About( ) {
    const{count, setCount} = useCount()

         return <div><h1>About Page</h1>
          <button onClick={() => setCount(count + 1)}>
          Button ++
        </button>
         </div>
}