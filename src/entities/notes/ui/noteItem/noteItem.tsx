import s from './noteItem.module.scss'
import {INote} from "@/entities/notes";

interface propsType {
    note: INote
}
export default function NoteItem({note}:propsType) {
    return (
        <div className={s.note}>
            <div className={s.title}>{note.title}</div>
            <div className={s.subtitle}>{note.subtitle}</div>
        </div>
    )
}
