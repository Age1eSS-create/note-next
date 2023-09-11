import {NextRequest, NextResponse} from "next/server";

export async function GET(request:NextRequest) {
    const id = request.nextUrl.searchParams.get('id')
    try {
        const res = await fetch(`http://127.0.0.1:8090/api/collections/Note/records/${id}`,
            {

                method: 'GET',
                cache: 'no-store',
            },
        )
        if (res.ok) {
            const data = await res.json()
            return NextResponse.json({
                error: false,
                payload: {
                    data: data,
                }
            })
        }
    } catch (e) {
        return NextResponse.json({
            error: false,
            payload: {
                data: 'Error get notes',
                count:0
            }
        })
    }
}

export async function PUT(request: NextRequest) {
    try {
        console.log("PUT")
        const {id, title, subtitle} = await request.json();
        const response = await fetch(`http://127.0.0.1:8090/api/collections/Note/records/${id}`, {
            method: "PATCH",
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    title,
                    subtitle,
                }
            )
        } )
        if (response.ok) {
            return NextResponse.json({flag:true})
        }
        return NextResponse.json({flag:false})
    } catch (e) {

    } finally {

    }
}
