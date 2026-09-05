import React from 'react'
import Link from 'next/link'

import './top-lists.css'

function TopLists() {
  return (
    <>
        <Link href='../tutorial' className='top-lists-button'>Tutorial</Link>
        <Link href='../practice' className='top-lists-button'>LABs</Link>
    </>
  )
}

export default TopLists