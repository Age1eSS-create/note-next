import s from './notesList.module.scss'
import {NoteListType} from "@/entities/notes/types/note";
import NoteItem from "@/entities/notes/ui/noteItem/noteItem";

interface propsType {
    notes: NoteListType
}

export function NoteList({notes} : propsType) {
    return (
        <div className={s.NoteList}>
            {notes.map((note) => (
                <NoteItem note={note} />
            ))}
        </div>
    )
}
