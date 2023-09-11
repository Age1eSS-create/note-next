'use client'

import s from './noteItem.module.scss'
import {INote} from "@/entities/notes";
import {ReactNode, useState} from "react";
import classNames from "classnames";
import {useRouter} from "next/navigation";

interface propsType {
    note: INote,
    DeleteNote: ReactNode
}
export default function NoteItem({note, DeleteNote}:propsType) {
    const [deleteAnimation , setDeleteAnimation] = useState<boolean>(false)
    const router = useRouter()

    const handlerMouseMove = (e) => {
        setDeleteAnimation(true)
    }
    const handlerMouseLeave = (e) => {
        setDeleteAnimation(false)
    }

    return (
        <div className={classNames(s.note, deleteAnimation && s.deleteAnimation)}>
            <div className={s.close} onMouseMove={handlerMouseMove} onMouseLeave={handlerMouseLeave}>
                <DeleteNote id={note.id} />
            </div>
            <div className={s.title} onClick={() => router.push(`/notes/${note.id}`)}>{note.title}</div>
            <div className={s.subtitle}>{note.subtitle}</div>
        </div>
    )
}
