'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Parabola03Icon } from 'hugeicons-react'

const Login = () => {
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const router = useRouter()

    const handleSignup = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            const data = await res.json()

            if (res.ok) {
                localStorage.setItem('authToken', data.token)
                router.push('/')
            } else {
                setMessage(data.message)
                setIsSubmitting(false)
            }

        } catch (error) {
            console.log(error)
            setIsSubmitting(false)
            setMessage(error.message)
        }
    }

    return (
        <section className='grid place-items-center h-screen'>
            <div className='bg-white px-14 py-5 rounded-xl flex flex-col gap-5'>
                <div className='flex items-center gap-2'>
                    <Parabola03Icon
                        size={24}
                        color={"#000000"}
                        variant={"stroke"}
                    />
                    <h1 className='title text-xl font-extrabold'>Bouletteproof CRM</h1>
                </div>
                <h3 className='text-center text-lg uppercase font-extrabold text-[#07BDCB]'>Login</h3>
                <form className='flex flex-col gap-5' onSubmit={handleSignup}>
                    <div className='input-fields'>
                        <label className='text-sm font-semibold'>Email</label>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            className='border border-slate-200 px-3 py-2 rounded-lg text-sm'
                            value={user.email}
                            onChange={(e) => setUser({...user, email: e.target.value})}
                        />
                    </div>

                    <div className='input-fields'>
                        <label className='text-sm font-semibold'>Password</label>
                        <input
                            type="password"
                            placeholder='Enter password'
                            className='border border-slate-200 px-3 py-2 rounded-lg text-sm'
                            value={user.password}
                            onChange={(e) => setUser({...user, password: e.target.value})}
                        />
                    </div>
        
                    <button type='submit' className='bg-[#07BDCB] p-2 rounded-xl mt-6 text-sm font-semibold'>
                        {isSubmitting ? 'logging in...' : 'Log in'}
                    </button>

                    <p className='text-sm'>Don't have an account? <Link href='/signup' className='text-[#07BDCB]'>Signup</Link></p>
                </form>
            </div>
        </section>
    )
}

export default Login