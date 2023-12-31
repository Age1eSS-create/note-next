'use client'
import s from './addNote.module.scss'
import classNames from "classnames";
import {useCallback, useState} from "react";
import {addNote} from "@/features/notes/addNote/controller/addNote";
import {notesStore} from "@/entities/notes";
import {Button, Input, Modal, Textarea} from "@/shared/ui-kit";
export const AddNote = () => {
    const [flagShow, setFlagShow] = useState(false)

    return (
        <>
            <Button className={s.button} modes={['default']}  onClick={e => setFlagShow(true)}>Добавить заметку</Button>
            {/*<button className={s.button} onClick={e => setFlagShow(true)}>Добавить заметку</button>*/}
            {flagShow && <AddNoteModal setFlagShow={setFlagShow} />}
        </>
    );
};

const AddNoteModal = ({setFlagShow}:{setFlagShow:Function}) => {
    const [newNote, setNewNote] = useState<{title:string, subtitle:string}>({title: '', subtitle:''})
    const {getNotes} = notesStore

    const handlerChange = useCallback((e) => {
        console.log(e.target.name)
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
        <Modal className={s.modal} setFlagShow={setFlagShow} title={'Добавить заметку'} >
            <Input modes={['default']} placeholder={'Заголовок'} type="text" name='title' value={newNote.title} onChange={handlerChange}/>
            <Textarea modes={['default']} placeholder={'Текст'} type="text" name='subtitle' value={newNote.subtitle} onChange={handlerChange}/>
            <Button modes={['blue']} onClick={handlerClick}>Добавить</Button>
        </Modal>
    )
}
