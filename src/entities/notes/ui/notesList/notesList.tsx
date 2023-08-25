'use client'
import s from './notesList.module.scss'
import {NoteListType} from "@/entities/notes/types/note";
import NoteItem from "@/entities/notes/ui/noteItem/noteItem";
import {ReactNode} from "react";

interface propsType {
    notes: NoteListType,
    DeleteNote: ReactNode
}

export function NoteList({notes, DeleteNote } : propsType) {

    const handlerDragStart = (e, note) => {
        console.log("Drag", note)
    }
    const handlerDragLeave = (e) => {

    }
    const handlerDragEnd = (e) => {

    }
    const handlerDragOver = (e) => {
        e.preventDefault()

    }
    const handlerDrop = (e, note) => {
        e.preventDefault()
        console.log("Drop", note)
    }

    return (
        <div className={s.NoteList}>
            {Array.isArray(notes) && notes?.map((note) => (
                <div key={note.id} draggable={true}
                     onDragStart={e => handlerDragStart(e, note)}
                     onDragLeave={handlerDragLeave}
                     onDragEnd={handlerDragEnd}
                     onDragOver={handlerDragOver}
                     onDrop={e => handlerDrop(e, note)}
                >
                    <NoteItem note={note} DeleteNote={DeleteNote} /></div>
            ))}
        </div>
    )
}
