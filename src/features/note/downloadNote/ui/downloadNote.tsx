import React from 'react';
import {Button} from "@/shared/ui-kit";
import {INote} from "@/entities/noteCard";
import {downloadNote} from "@/features/note/downloadNote/controller/downloadNote";

interface PropsType {
    note: INote
}
export function DownloadNote ({ note }:PropsType) {

    const handlerDownload = () => {
        console.log('download', note.title)
        downloadNote(note)
    }

    return (
        <Button onClick={handlerDownload} modes={['blue']}>
            Скачать
        </Button>
    );
};
