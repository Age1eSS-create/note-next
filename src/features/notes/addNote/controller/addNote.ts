

export const  addNote = async (title:string, subtitle:string) =>  {
    try {
        console.log("ADD CONTROLLER")
        const res = await fetch('http://localhost:3000/api/notes', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title,subtitle})
        })
        const data = await res.json()
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}
