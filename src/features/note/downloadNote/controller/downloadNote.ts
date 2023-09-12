import {INote} from "@/entities/noteCard";

export const downloadNote = (note:INote) => {
    const fileData = JSON.stringify(note.subtitle)
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = `${note.title}-${note.create}.txt`;
    link.href = url;
    link.click();
}