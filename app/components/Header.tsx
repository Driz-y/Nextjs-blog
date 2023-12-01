import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <div className='p-10'>
            <div className='max-w-7xl mx-auto flex justify-betweeen'> <Link href="/"> <div className='flex items-center cursor-pointer'>
                <h1 className='text-3xl text-slate-600'>Home</h1></div> </Link></div>

        </div >
    )
}
