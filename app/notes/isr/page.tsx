
 
type ListNotes = {
    id: string
    title: string
    description: string
    deleted_at: string
    created_at: string
    updated_at: string
}

type Notes = {
  success: boolean,
  message: string,
  data: ListNotes[]
}
 


// app/page.tsx
export const revalidate = 3; // ISR: regenerate max tiap 60 detik



export default async function Page(){
  const notes: Notes = await fetch(`https://service.pace11.my.id/api/notes/`,
  ).then((res) => res.json())
  
  return(
     <main>
        <ul>
    {
        notes.data.map((note) => (
        <li key={note.id} style={{
            border: '1px solid black',
            marginBottom: '10 px', 
            padding: '8px'
        }}
        >
          <a href={`/notes/isr/${note.id}`}>
        {note.title}
          </a>
        </li>
        )
    )
    }
    </ul>
    </main>
  )
}
