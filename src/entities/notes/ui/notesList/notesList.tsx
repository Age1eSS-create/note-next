'use client'
import s from './notesList.module.scss'
import {INote, NoteListType} from "@/entities/notes/types/note";
import NoteItem from "@/entities/notes/ui/noteItem/noteItem";
import {ReactNode, useEffect, useState} from "react";
import {notesStore} from "@/entities/notes";
import {observer} from "mobx-react-lite";


interface propsType {
    notes: NoteListType,
    DeleteNote: ReactNode
}

const NoteList =  observer(({ DeleteNote } : propsType) =>  {

    const { notes, getNotes, isLoading } = notesStore

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

    useEffect(() => {
        getNotes()
    }, [])

    return (
        <div className={s.NoteList}>
            {!isLoading
                ?
                notes?.map((note) => (
                    <div key={note.id} draggable={true}
                         onDragStart={e => handlerDragStart(e, note)}
                         onDragLeave={handlerDragLeave}
                         onDragEnd={handlerDragEnd}
                         onDragOver={handlerDragOver}
                         onDrop={e => handlerDrop(e, note)}
                    >
                        <NoteItem note={note} DeleteNote={DeleteNote} /></div>
                ))
                : 'Loading fetch' }
        </div>
    )
})

export default NoteList
