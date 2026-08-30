import { notFound } from "next/navigation"
import { getNoteById } from "@/app/services/notes"
import { toggleNoteImportance } from "@/app/actions/notes"

const NotePage = async({params} : {params : Promise<{id : string}>}) => {
    const {id} = await params
    const note = getNoteById(Number(id))

    if(!note) {
        notFound()
    }

    return (
        <div>
            <h2>{note.content}</h2>
            <p>{note.important ? 'important' : 'Not Important'}</p>
            <form action={toggleNoteImportance}>
                <input type="hidden" name="id" value={note.id}/>
                <button type="submit">
                    {note.important ? 'Mark not important' : 'Mark as important'}
                </button>
            </form>
        </div>
    )
}

export default NotePage