import { connectDB } from "@/utils/Database"
import User from "@/models/User"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { serialize } from "cookie"

export async function POST(req, res) {
    try {
        await connectDB()
        const {email, password} = await req.json()

        const user = await User.findOne({email})
        if (!user) {
            return new Response(JSON.stringify({message: 'User was not found'}), {status: 404})
        }

        const isPassword = await bcrypt.compare(password, user.password)
        if (!isPassword) {
            return new Response(JSON.stringify({message: 'Invalid credentials'}), {status: 400})
        }

        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h'
            }
        )


        const cookie = serialize('authToken', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60,
            path: '/',
        })

        const headers = new Headers()
        headers.append('Set-Cookie', cookie)

        const userData = user.toObject()
        delete userData.password

        return new Response(JSON.stringify({'data': userData, token}), {status: 200, headers: headers})

    } catch (error) {
        console.log(`an error occurred ${error.message}`)
        return new Response(JSON.stringify({message: `Something went wrong: ${error.message}`}), {status: 500})
    }
}
