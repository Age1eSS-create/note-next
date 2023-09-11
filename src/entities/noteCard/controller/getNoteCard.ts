export async function getNoteCard(id) {
    const res = await fetch(`http://localhost:3000/api/noteCard?id=${id}`, {method: "GET", cache:'no-cache'})
    const data = await res.json()
    console.log(data.payload.data)
    return data.payload.data
}
