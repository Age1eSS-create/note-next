import {INote} from "@/entities/noteCard/types/note";
import {makeAutoObservable} from "mobx";
import {getNoteCard} from "@/entities/noteCard/controller/getNoteCard";

class noteCardStore {
    public note: INote | null = null
    public isLoading: boolean = false
    public constructor() {
        makeAutoObservable(this)
    }
    getNoteCard = async (id) => {
        try {
            this.isLoading = true
            let data = await getNoteCard(id) as INote
            this.setNoteCard(data)

        } catch (e) {
            console.log(e)
        } finally {
            this.isLoading = false
        }
    }

    setNoteCard = (note:INote) => {
        this.note = note
    }

}

export const NoteCardStore = new noteCardStore()
