'use client'
import s from './deleteNote.module.scss'
import close from "@/shared/assets/svg/close.svg";
import Image from "next/image";
import {deleteNote} from "@/features/notes/deleteNote/controller/deleteNote";
import {useRouter} from "next/navigation";
import {notesStore} from "@/entities/notes";

interface propsType {
    id:number
}
export const DeleteNote = ({id} : propsType) => {
    const { getNotes } = notesStore
    const onClick = async (e) => {
        await deleteNote(id)
        await getNotes()
    }

    return (
        <Image onClick={onClick}  src={close} alt={"Закрыть"} />
    );
};

