import React from 'react'
import Image from 'next/image'

function TCHead() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <Image src='/next.svg' alt='Image' width={300} height={300}/>
    </div>
  )
}

export default TCHead