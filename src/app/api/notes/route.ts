import {NextRequest, NextResponse} from "next/server";


export async function GET() {
    try {
        const res = await fetch('http://127.0.0.1:8090/api/collections/Note/records?page=1&perPage=50',
            {
                method: 'GET'
                }
            )
        if (res.ok) {
            const data = await res.json()
            return NextResponse.json({
                error: false,
                payload: {
                    data: data.items,
                    count: data.items.length
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

export async function POST(request: NextRequest) {
    try {
        const title = request.nextUrl.searchParams.get('title')
        const subtitle = request.nextUrl.searchParams.get('subtitle')
        console.log(subtitle, title)
        const response = await fetch('http://127.0.0.1:8090/api/collections/Note/records', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    title,
                    subtitle,
                    create: new Date()
                }
            )
        } )
        if (response.ok) {
            return NextResponse.json({flag:true})
        }
        return NextResponse.json({flag:false})

    } catch (e) {
        return NextResponse.json({flag:false})
    }
}
