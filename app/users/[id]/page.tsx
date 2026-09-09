import { notFound } from "next/navigation"
import { getNotesByUserId, getUserById, getUserWithNotes } from "@/app/services/users"
import Link from "next/link"
import { Idiqlat } from "next/font/google"

type Param = {
    params : Promise<{id:string}>
}
const UserPage = async({params} : Param) => {
    const {id} = await params
    const user = await getUserWithNotes(Number(id))
    
    if(!user) {
        notFound()
    }

    // const notes = await getNotesByUserId(Number(id))

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Username : {user.username}</p>
            <h3>Notes</h3>
            <ul>
                {
                    user.notes.map(note => (
                        <li key={note.id}>
                            <Link href={`/notes/${note.id}`}>{note.content}</Link>
                            {note.important && <strong>(important)</strong>}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserPage