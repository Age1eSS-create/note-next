'use client'
import s from './addNote.module.scss'
import classNames from "classnames";
import {useState} from "react";
import {addNote} from "@/features/notes/addNote/controller/addNote";
import { useRouter } from 'next/navigation'
export const AddNote = () => {
    const router = useRouter()
    const [title, setTitle] = useState<string>('')
    const [subtitle, setSubtitle] = useState<string>('')
    const handlerClick = async (e) => {
        e.preventDefault()
        await addNote(title,subtitle)
        setTitle('')
        setSubtitle('')
        location.reload()
    }

    return (
        <div className={classNames(s.addNote)}>
            <h3>Add Note</h3>
            <form>
                <input type="text" placeholder={'title'} value={title} onChange={e => setTitle(e.target.value)}/>
                <input type="text" placeholder={'subtitle'} value={subtitle} onChange={e => setSubtitle(e.target.value)}/>
                <button onClick={handlerClick} >Добавить</button>
            </form>
        </div>
    );
};
