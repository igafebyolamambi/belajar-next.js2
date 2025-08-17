type ListNotes = { 
  id: string;
  title: string;
  description: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
};

type Notes = { 
  success: boolean;
  message: string;
  data: ListNotes[];
};

type DetailNotes = { 
  success: boolean;
  message: string;
  data: ListNotes;
};

export const revalidate = 3; // ISR regenerate tiap 3 detik
export const dynamicParams = true;

export async function generateStaticParams() { 
  const notes: Notes = await fetch('https://service.pace11.my.id/api/notes')
    .then((res) => res.json());
  
  return notes.data.map((note: ListNotes) => ({ 
    id: String(note.id)
  }));
} 

export default async function Page({ 
  params 
}: { 
  params: { id: string }
}) { 
  const { id } = params;

  const noteDetail: DetailNotes = await fetch(
    `https://service.pace11.my.id/api/notes/${id}`
  ).then((res) => res.json());
  
  const note = noteDetail.data;

  return ( 
    <main>
      <h1>{note.title}</h1>
      <p>{note.description}</p>
    </main>
  );
}
