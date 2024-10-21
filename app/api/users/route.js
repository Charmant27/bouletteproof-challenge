import { connectDB } from "@/utils/Database";
import User from "@/models/User";
import jwt from 'jsonwebtoken'

export async function GET(req) {
    try {
        await connectDB()
        const token = req.headers.get('Authorization')?.split(' ')[1]

        if(!token) {
            return new Response(JSON.stringify({message: 'Unauthorized'}), {status: 401})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        const users = await User.find({_id: {$ne: decoded.userId}}).select('-password')

        return new Response(JSON.stringify({users}), {status: 200})

    } catch (error) {
        console.log(`an error occurred ${error.message}`)
        return new Response(JSON.stringify({message: `Something went wrong: ${error.message}`}), {status: 500})
    }
}
