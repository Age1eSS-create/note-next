'use client'

import { useParams } from 'next/navigation'
import {NoteCard} from "@/entities/noteCard";
import {EditNote} from "@/features/note/editNote";
export default function Note(){
    const params = useParams()
    console.log(params.id)

    return <div>
        <NoteCard id={params.id} EditNote={EditNote}  />
    </div>
}
