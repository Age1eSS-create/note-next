import React from 'react';
import s from './page.module.scss';
import {NoteList} from "@/entities/notes";
import {AddNote} from "@/features/notes/addNote/ui/addNote";
import {DeleteNote} from "@/features/notes/deleteNote";

async function getNotes() {
    const res = await fetch(`http://localhost:3000/api/notes`, {method: "GET", cache:'no-cache'} )
    const data = await res.json()
    return data.payload.data
    // return data?.items as any[]
}
export default async function Notes() {
    // const notes = await getNotes();
    return (
        <div className={s.notesList}>
            <div className={s.addNoteContainer}>
                <AddNote />
            </div>
           <NoteList DeleteNote={DeleteNote} />
        </div>
    )
}
