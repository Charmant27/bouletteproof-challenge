'use client'

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  DashboardSquare02Icon,
  WaterfallUp02Icon,
  UserMultiple02Icon,
  Coins01Icon,
  Settings02Icon,
  Logout02Icon,
  Parabola03Icon
} from 'hugeicons-react'

const Sidebar = () => {
  const router = useRouter()
  const [user, setUser] = useState()

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
      })
      const data = await res.json()

      if (res.ok) {
        router.push('/login')
      }
    } catch (error) {
      console.log(`an error occurred: ${error.message}`)
    }
  }

  useEffect(() => {
    try {
      const getUser = async () => {
        const token = localStorage.getItem('authToken')

        if (!token) {
          throw new Error('No token found. Please login.');
      }

        const res = await fetch('api/auth/user', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        const data = await res.json()

        if (res.ok) {
          setUser(data.user)
        } else {
          throw new Error('Failed to retrieve user information')
        }
      }
      getUser()
    } catch (error) {
      console.log(error.message)
    }

  }, [])

  return (
    <div className='flex flex-col justify-between gap-6 bg-white h-screen px-12 py-6 fixed'>

      {/* links */}
      <div className="flex flex-col gap-3">

        {/* logo */}
        <div className="flex gap-1 pb-9">
          <Parabola03Icon
            size={24}
            color={"#000000"}
            variant={"stroke"}
          />
          <h2 className="font-extrabold">Bouletteproof CRM</h2>
        </div>

        <ul className="flex flex-col gap-8 font-semibold text-sm">
          <li className="flex items-center gap-2">
            <DashboardSquare02Icon
              size={16}
              color={"#000000"}
              variant={"stroke"}
            />
            <Link href='/'>Dashboard</Link>
          </li>

          <li className="flex items-center gap-2">
            <WaterfallUp02Icon
              size={16}
              color={"#000000"}
              variant={"stroke"}
            />
            <Link href='/'>Statistics</Link>
          </li>

          <li className="flex items-center gap-2">
            <UserMultiple02Icon
              size={16}
              color={"#000000"}
              variant={"stroke"}
            />
            <Link href='/'>Users</Link>
          </li>

          <li className="flex items-center gap-2">
            <Coins01Icon
              size={16}
              color={"#000000"}
              variant={"stroke"}
            />

            <Link href='/'>Visit reports</Link>
          </li>

          <li className="flex items-center gap-2">
            <Settings02Icon
              size={16}
              color={"#000000"}
              variant={"stroke"}
            />
            <Link href='/'>Settings</Link>
          </li>
        </ul>
      </div>

      {/* user profile */}
      <div className="flex flex-col gap-2 items-center">
        <Image
          src='/profile.jpg'
          width={50}
          height={50}
          alt="profile"
          className="object-cover w-12 h-12 rounded-[50%]"
        />
        <h3 className="font-bold">{user?.name}</h3>
        <p className="text-sm text-slate-400 font-light">{user?.role}</p>
      </div>

      <div className="flex items-center gap-2">
        <Logout02Icon
          size={24}
          color={"#000000"}
          variant={"stroke"}
        />
        <button className="text-sm" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar