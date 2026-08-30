import {getNotes} from '../services/notes'
import NoteList from './NoteList'
const Notes = () => {
    const notes = getNotes()
    return (
        <div>
            <h2>Notes</h2>
            <ul>
                <NoteList notes={notes}/>
            </ul>
        </div>
    )

}
export default Notes;