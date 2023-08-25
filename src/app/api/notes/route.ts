import {NextRequest, NextResponse} from "next/server";


export async function GET() {
    try {
        const res = await fetch('http://127.0.0.1:8090/api/collections/Note/records?page=1&perPage=50',
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
        const {title, subtitle} = await request.json();
        const response = await fetch('http://127.0.0.1:8090/api/collections/Note/records', {
            method: "POST",
            cache: 'no-cache',
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


export async function DELETE(request:NextRequest) {
    try {
        console.log('delete guest cart offer');
        const id = request.nextUrl.searchParams.get('id')
        console.log(request.url)
        const response = await fetch(`http://127.0.0.1:8090/api/collections/Note/records/${id}`, {
            method: 'DELETE'
        })
        if (response.ok) return NextResponse.json({flag: true})
        return NextResponse.json({flag: false})

    } catch (e) {
        return NextResponse.json({flag: false})
    }
}
