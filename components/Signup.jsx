'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Parabola03Icon } from 'hugeicons-react'

const Signup = () => {
    const [message, setMessage] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [user, setUser] = useState({
        name: '',
        email: '',
        role: '',
        password: ''
    })

    const router = useRouter()

    const handleSignup = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const res = await fetch('/api/auth/sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            const data = await res.json()

            if (res.ok) {
                router.push('/')
                setIsSubmitting(false)
                setMessage(data.message)
            } else {
                setMessage(data.message)
            }

        } catch (error) {
            console.log(error)
            setIsSubmitting(false)
            setMessage(error.message)
        }
    }

    return (
        <section className='grid place-items-center h-screen'>
            <div className='bg-white px-14 py-5 rounded-xl flex flex-col gap-5 w-[40%]'>
                <div className='flex items-center gap-2'>
                    <Parabola03Icon
                        size={24}
                        color={"#000000"}
                        variant={"stroke"}
                    />
                    <h1 className='title text-xl font-extrabold'>Bouletteproof CRM</h1>
                </div>
                <h3 className='text-center text-lg uppercase font-extrabold text-[#07BDCB]'>Signup</h3>
                <form className='flex flex-col gap-5' onSubmit={handleSignup}>
                    <div className='input-fields'>
                        <label className='text-sm font-semibold'>Name</label>
                        <input
                            type="text"
                            placeholder='Enter your full name'
                            className='border border-slate-200 px-3 py-2 rounded-lg text-sm'
                            value={user.name}
                            onChange={(e) => setUser({...user, name: e.target.value})}
                        />
                    </div>

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
                        <label className='text-sm font-semibold'>Role/Position</label>
                        <input
                            type="text"
                            placeholder='Role'
                            className='border border-slate-200 px-3 py-2 rounded-lg text-sm'
                            value={user.role}
                            onChange={(e) => setUser({...user, role: e.target.value})}
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
                        {isSubmitting ? 'Signing up...' : 'Signup'}
                    </button>
                    <p className='text-sm text-center'>Already have an account? <Link href='/login' className='text-[#07BDCB]'>Login</Link></p>
                </form>
            </div>
        </section>
    )
}

export default Signup