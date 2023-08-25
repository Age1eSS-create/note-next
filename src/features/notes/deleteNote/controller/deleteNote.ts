

export const deleteNote = async (id:number) =>  {
    try {
        console.log("delete CONTROLLER")
        const res = await fetch(`http://localhost:3000/api/notes?id=${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json()
        console.log(data)
        return
    } catch (e) {
        console.log(e)
    }
}
