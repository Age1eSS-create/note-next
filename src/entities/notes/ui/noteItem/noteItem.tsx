'use client'

import s from './noteItem.module.scss'
import {INote} from "@/entities/notes";
import Image from "next/image";
import close from '@/shared/assets/svg/close.svg'
import {useState} from "react";
import classNames from "classnames";

interface propsType {
    note: INote
}
export default function NoteItem({note}:propsType) {
    const [deleteAnimation , setDeleteAnimation] = useState<boolean>(false)

    const handlerMouseMove = (e) => {
        setDeleteAnimation(true)
    }
    const handlerMouseLeave = (e) => {
        setDeleteAnimation(false)
    }

    return (
        <div className={classNames(s.note, deleteAnimation && s.deleteAnimation)}>
            <div className={s.close} onMouseMove={handlerMouseMove} onMouseLeave={handlerMouseLeave}>
                <Image src={close} alt={"Закрыть"} />
            </div>
            <div className={s.title}>{note.title}</div>
            <div className={s.subtitle}>{note.subtitle}</div>
        </div>
    )
}
