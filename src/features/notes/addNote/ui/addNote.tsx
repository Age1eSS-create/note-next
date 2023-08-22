'use client'
import s from './addNote.module.scss'
import classNames from "classnames";
import {useState} from "react";
import {addNote} from "@/features/notes/addNote/controller/addNote";
export const AddNote = () => {
    const [title, setTitle] = useState<string>('')
    const [subtitle, setSubtitle] = useState<string>('')

    const handlerClick = async (e) => {
        console.log("ADD func")
        e.preventDefault()
        console.log("ADD func")
        await addNote(title,subtitle)
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
