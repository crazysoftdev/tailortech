import { ModeToggle } from '@/components/global/mode-toggle'
import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  user?: null | User
}

const Navigation = ({ user }: Props) => {
  return (
    <div className="fixed top-0 right-0 left-0 p-4 flex items-center justify-between z-10">
      <aside className="flex items-center gap-2">
        <Image
          src={'/assets/code.png'}
          width={40}
          height={40}
          alt="logo"
        />
        <span className="text-xl font-bold"> TailorTech.</span>
      </aside>
      <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
        <ul className="flex items-center justify-center gap-16 ">
          <Link href={'#'}className="font-bold hover:text-primary hover:underline">Pricing</Link>
          <Link href={'#'}className="font-bold hover:text-primary hover:underline">About</Link>
          <Link href={'#'}className="font-bold hover:text-primary hover:underline">Documentation</Link>
          <Link href={'#'}className="font-bold hover:text-primary hover:underline">Features</Link>
        </ul>
      </nav>
      <aside className="flex gap-2 items-center">
        {/* Conditional rendering based on user's login status */}
        <Link
          href={'/agency'}
          className="bg-primary text-white p-2 px-4 rounded-md hover:bg-primary/80"
        >
          Login
        </Link>
        <UserButton />
        <ModeToggle />
      </aside>
    </div>
  )
}

export default Navigation
