export interface INote {
    id: any,
    title: string,
    subtitle:string
    create: Date,
}

export type NoteListType = Array<INote>
