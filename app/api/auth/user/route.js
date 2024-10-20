import { connectDB } from "@/utils/Database";
import User from "@/models/User";
import jwt from 'jsonwebtoken'

export async function GET(req) {
    try {
        await connectDB()

        const authHeader = req.headers.get('authorization')

        if(!authHeader) {
            return new Response(JSON.stringify({message: 'Token not found'}), {status: 401})
        }

        const token = authHeader.split(' ')[1]

        if(!token) {
            return new Response(JSON.stringify({message: 'Unauthorized'}), {status: 401})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.userId).select('-password')

        if(!user) {
            return new Response(JSON.stringify({message: 'User not found'}), {status: 404})
        }

        return new Response(JSON.stringify({user}), {status: 200})

    } catch (error) {
        console.log(`an error occurred ${error.message}`)
        return new Response(JSON.stringify({message: error.message}), {status: 500})
    }
}
