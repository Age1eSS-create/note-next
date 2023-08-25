'use client'
import s from './deleteNote.module.scss'
import close from "@/shared/assets/svg/close.svg";
import Image from "next/image";
import {deleteNote} from "@/features/notes/deleteNote/controller/deleteNote";
import {useRouter} from "next/navigation";

interface propsType {
    id:number
}
export const DeleteNote = ({id} : propsType) => {
    const router = useRouter()
    const onClick = async (e) => {
        await deleteNote(id)
        location.reload()
    }

    return (
        <Image onClick={onClick}  src={close} alt={"Закрыть"} />
    );
};

