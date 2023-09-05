export async function getNotes() {
    const res = await fetch(`http://localhost:3000/api/notes`, {method: "GET", cache:'no-cache'} )
    const data = await res.json()
    console.log(data.payload.data)
    return data.payload.data
    // return data?.items as any[]
}
