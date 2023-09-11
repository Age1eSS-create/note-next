'use client'

import React, {ReactNode, useEffect, useState} from 'react';
import s from './noteCard.module.scss'
import {observer} from "mobx-react-lite";
import {NoteCardStore} from "@/entities/noteCard/model/noteCardStore";
import classNames from "classnames";
import {Button} from "@/shared/ui-kit";

interface PropsType {
    id:any;
    EditNote: ReactNode,
}
const NoteCard = observer(({id, EditNote}:PropsType) => {
    const {note, isLoading, getNoteCard } = NoteCardStore
    const [editFlag , setEditFlag] = useState(false)

    useEffect(() => {
        getNoteCard(id)
    }, [id])


    return(
        isLoading ? <div>Loading...</div> :
            // : <EditNote note={note}/>
            editFlag ? <EditNote note={note} setFlag={setEditFlag}/> :
            <div className={classNames(s.card)}>
                <div className={classNames(s.title)}>
                    <p className={s.label}>Название:</p>
                    <p className={s.text}>{note?.title}</p>
                </div>
                <div className={classNames(s.subtitle)}>
                    <p className={s.label}>Текст:</p>
                    <p className={s.text}>{note?.subtitle}</p>
                </div>
                <div className={classNames(s.date)}>
                    <p className={s.label}>Дата создания:</p>
                    <p className={s.text}>{note?.create}</p>
                </div>
                <div className={s.buttonContainer}>
                    <Button modes={['default']} onClick={e => setEditFlag(true)}>Изменить</Button>
                </div>
            </div>

    )
});

export default NoteCard
