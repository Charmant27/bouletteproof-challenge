export async function GET(Request) {
    const data = {id: 1, name: 'John Doe', email: 'johndoe@test.com'}
    return Response.json({data})
}