
import Link from "next/link"
import { getNotes } from "../services/notes"


type SearchParams = {
  searchParams : Promise<{important? : string}>
}


const Notes = async ({
  searchParams,
}: SearchParams) => {
  const { important } = await searchParams
  
  const showImportant = important === "true"
  // const allNotes = await getNotes()
  // const notes = showImportant
  //   ? allNotes.filter((note) => note.important)
  //   : allNotes
  const notes = await getNotes(showImportant)

  if(!notes || notes.length <= 0) {
    return (
      <div>
        <p>No notes found!</p>
      </div>
    )
  }
  return (
    <div>
      <h2>Notes</h2>
      <div>
        <Link href={showImportant ? "/notes" : "/notes?important=true"}>
          {showImportant ? "show all" : "show important only"}
        </Link>
      </div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>{note.content}</Link>
            {note.important && <strong> (important)</strong>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notes