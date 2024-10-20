import { serialize } from "cookie";

export async function POST() {
    try {
        const cookie = serialize('authToken', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 0,
            path: '/'
        })

        const headers = new Headers()
        headers.append('Set-Cookie', cookie)

        return new Response(JSON.stringify({message: 'You are logged out'}), {status: 200, headers: headers})
    } catch (error) {
        console.error(`An error occurred: ${error.message}`)
        return new Response(JSON.stringify({message: error.message}), {status: 500})
    }
}
