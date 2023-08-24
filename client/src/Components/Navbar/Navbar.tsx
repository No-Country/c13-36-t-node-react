import React from 'react'
import Avatar from '../Avatar/Avatar'
import AvatarUser from '../Avatar/AvatarUser'

export default function Navbar() {
  return (
    <nav className='border-2 w-full flex place-content-between items-center	 mb-2'>
        <Avatar size="medium" src="avatar.png" />
        <AvatarUser />
    </nav>
  )
}
