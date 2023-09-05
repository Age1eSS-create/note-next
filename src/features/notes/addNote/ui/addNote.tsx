'use client'
import s from './addNote.module.scss'
import classNames from "classnames";
import {useCallback, useState} from "react";
import {addNote} from "@/features/notes/addNote/controller/addNote";
import { useRouter } from 'next/navigation'
import {notesStore} from "@/entities/notes";
export const AddNote = () => {
    const [flagShow, setFlagShow] = useState(false)

    return (
        <>
            <button className={s.button} onClick={e => setFlagShow(true)}>Добавить заметку</button>
            {flagShow && <AddNoteModal setFlagShow={setFlagShow} />}
        </>
    );
};

const AddNoteModal = ({setFlagShow}:{setFlagShow:Function}) => {
    const [newNote, setNewNote] = useState<{title:string, subtitle:string}>({title: '', subtitle:''})
    const {getNotes} = notesStore

    const handlerChange = useCallback((e) => {
        setNewNote({...newNote, [e.target.name]:e.target.value})
    }, [newNote])

    const handlerClick = async (e) => {
        e.preventDefault()
        await addNote(newNote.title, newNote.subtitle)
        setNewNote({title: '', subtitle:''})
        setFlagShow(false)
        await getNotes()
    }

    return (
        <div className={s.modal}>
            <div className={s.container}>
                <input placeholder={'Заголовок'} type="text" name='title' value={newNote.title} onChange={handlerChange}/>
                <textarea placeholder={'Текст'} type="text" name='subtitle' value={newNote.subtitle} onChange={handlerChange}/>
                <button onClick={handlerClick}>Добавить</button>
            </div>
        </div>
    )
}
