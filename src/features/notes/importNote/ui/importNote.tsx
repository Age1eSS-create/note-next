'use client'
import React from 'react';
import {Button} from "@/shared/ui-kit";
import s from './importNote.module.scss'
import {addNote} from "@/features/notes/addNote";
import {notesStore} from "@/entities/notes";

export function ImportNote () {
    const { getNotes } = notesStore
    const handlerClick = (e:any) => {
        document.getElementById('importNote')?.click()
    }
    const handlerImport = async (e:any) => {
        e.preventDefault()
        const title = e.target.files[0].name.split('.')[0]
        let subtitle:any = ''
        const reader = new FileReader()
        reader.onload = async (e) => {
            subtitle = e.target?.result
            await addNote(title, subtitle)
            await getNotes()
        }
        await reader.readAsText(e.target.files[0])
    }

    return (
        <div className={s.importNote}>
            <input id='importNote' type='file' multiple={false} onChange={handlerImport}  accept={'text/plain'}/>
            <Button onClick={handlerClick} modes={['blue']}>
                Добавить из файла
            </Button>
        </div>
    );
};
