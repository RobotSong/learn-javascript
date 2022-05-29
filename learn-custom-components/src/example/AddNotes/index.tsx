import React, {useEffect} from "react";
import AddNotes, {Note} from "../../components/AddNotes";


const text = '这是一大段文字，可能需要在某些文字上添加标注!这是一大段文字，可能需要在某些文字上添加标注!这是一大段文字，可能需要在某些文字上添加标注!'
const notes: Note[] = [
    {id: '1', from: 0, to: 2, text: 'textadd'},
    {id: '2', from: 10, to: 15, text: 'textadd'}
]

const AddNotesExample = () => {

    useEffect(() => {

    })

    return (
        <div>
            <AddNotes text={text} notes={notes} />
        </div>
    )
}

export default AddNotesExample;