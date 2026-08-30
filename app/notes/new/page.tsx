
import {createNote} from '../../actions/notes'

const NewNote = ()=> {
    return (
        <div>
            <h2>Create a new note</h2>
            <form action={createNote}>
                <div>
                    <label htmlFor="">
                        Content
                        <input type="text" name="content" required/>
                    </label>
                </div>
                <div>
                    <label htmlFor="">
                        <input type="checkbox" name="important"/>
                        important
                    </label>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default NewNote