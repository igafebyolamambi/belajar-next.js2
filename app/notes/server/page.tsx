


async function getNotes(){
    const notes = await fetch('https://service.pace11.my.id/api/notes').then(
        (res) => res.json(),
    )

    return notes
}

export default async function Notes(){
    const notes = await getNotes()

    return (
        <ul>
            {notes.data.map((el) => (
                <li key={el.id}>
                    {el.title}
                </li>
            ))}
        </ul>
    )
}