'use client'

import { useParams } from 'next/navigation'
import {NoteCard} from "@/entities/noteCard";
import {EditNote} from "@/features/note/editNote";
import {DownloadNote} from "@/features/note/downloadNote";
export default function Note(){
    const params = useParams()

    return <>
        <NoteCard id={params.id} EditNote={EditNote} DownloadNote={DownloadNote} />
    </>
}
