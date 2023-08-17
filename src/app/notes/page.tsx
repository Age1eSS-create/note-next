import React from 'react';
import s from './page.module.scss';
import {NoteList} from "@/entities/notes";

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/Note/records?page=1&perPage=8')
    const data = await res.json()
    return data?.items as any[]
}
export default async function Notes() {
    const notes = await getNotes();
    return (
        <div className={s.notesList}>
            <h1>Заметки</h1>
           <NoteList notes={notes} />
        </div>
    )
}
