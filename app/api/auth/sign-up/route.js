import { connectDB } from "@/utils/Database";
import User from "@/models/User";
import bcrypt from 'bcryptjs'

export async function POST(req) {
    try {
        const {name, email, password, role} = await req.json()
        await connectDB()
        const userExists = await User.findOne({email})
        
        if(userExists) {
            return new Response(JSON.stringify({message: 'User already exists'}), {status: 400})
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            role,
        })

        const userData = newUser.toObject()
        delete userData.password

        return new Response(JSON.stringify({message: 'Account has been created', userData}), {status: 201})
    } catch (error) {
        console.log(`an error occurred ${error.message}`)
        return new Response(JSON.stringify({message: error.message}), {status: 500})
    }
}
