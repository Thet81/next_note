"use client"

import { useState } from "react"
import Link from "next/link"

type Note = {
    id : number
    content : string
    important : boolean
}
const NoteList = ({notes} : {notes : Note[]}) => {
    const [showImportant, setShowImportant] = useState(false)

    const notesToShow = showImportant ? notes.filter(note => note.important) : notes
    return (
        <>
            <div>
                <button onClick={()=> setShowImportant(!showImportant)}>{showImportant ? 'Show not important' : 'Show Important'}</button>
            </div>
            <div>
                {
                
                    notesToShow.map(note => (
                        <li key={note.id}>
                                <Link href={`/notes/${note.id}`}>{note.content}</Link>
                                {note.important && <strong>(important)</strong>}
                        </li>
                    ))
                }
            </div>
        </>
    )
}
export default NoteList