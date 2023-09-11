'use client'
import React, {useState} from 'react';
import classNames from "classnames";
import s from './editNote.module.scss'
import {INote} from "@/entities/noteCard";
import {Button, Input, Textarea} from "@/shared/ui-kit";
import {editNote} from "@/features/note/editNote/controller/editNote";
import {NoteCardStore} from "@/entities/noteCard/model/noteCardStore";


interface PropsType {
    note:INote,
    setFlag: (flag:boolean) => void
}
export function EditNote ({note, setFlag}:PropsType) {
    const [newNote, setNewNote] = useState(note)
    const {getNoteCard} = NoteCardStore

    const handlerChange = (e) => {
        setNewNote({...newNote, [e.target.name]:e.target.value})
    }

    const handlerClick = async (e) => {
        e.preventDefault()
        await editNote(newNote)
        await getNoteCard(note.id)
        setFlag(false)
    }

    return (
        <div className={s.card}>
            <div className={classNames(s.title)}>
                <p className={s.label}>Название:</p>
                <Input value={newNote?.title ? newNote.title : ''} modes={['outline']} name={'title'} onChange={handlerChange} placeholder={'Название'}/>
            </div>
            <div className={classNames(s.subtitle)}>
                <p className={s.label}>Текст:</p>
                <Textarea value={newNote?.subtitle ? newNote.subtitle : ''} modes={['outline']} name={'subtitle'} onChange={handlerChange} placeholder={'Текст'} />
            </div>
           <div className={classNames(s.date)}>
               <p className={s.label}>Дата создания:</p>
               <p className={s.text}>{note?.create}</p>
            </div>
            <div className={s.buttonContainer}>
                <Button modes={['default']} onClick={handlerClick}>Сохранить</Button>
            </div>
        </div>
    );
};

