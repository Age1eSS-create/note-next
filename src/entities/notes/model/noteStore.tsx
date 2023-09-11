import {INote} from "@/entities/notes";
import {makeAutoObservable, observable} from "mobx";
import {getNotes} from "@/entities/notes/controller/getNotes";
//
class NotesStore {

    public notes: Array<INote> = []
    public isLoading:boolean = false

    public constructor() {
        makeAutoObservable(this)
    }
    getNotes = async () => {
        try {
            this.isLoading = true
            let res = await getNotes()
            this.setNotes(res)
        } catch (e) {

        } finally {
            this.isLoading = false
        }
    }

    setNotes = (notes: Array<INote>) => {
        this.notes = notes
    }

}

export const notesStore = new NotesStore()
