import {PATCH} from "@/app/api/noteCard/route";
import {INote} from "@/entities/noteCard";

export const editNote = async (newNote:INote) => {
    try {
        // PATCH
        const res = await fetch('http://localhost:3000/api/noteCard', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: newNote.id,
                title: newNote.title,
                subtitle:newNote.subtitle
            })
        })
        const data = await res.json()
        console.log(data)
    } catch (e) {

    } finally {

    }
}
