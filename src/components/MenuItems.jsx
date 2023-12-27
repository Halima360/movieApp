import Link from 'next/link'
import React from 'react'

function MenuItems({title,icon,address}) {
  return (
    <div className=''>
        <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
            {icon}
        <p className='hidden sm:inline my-5'>{title}</p>
        </Link>
    </div>
  )
}

export default MenuItems