import React from 'react'
import { redirect } from 'next/navigation'

function Home() {
  return (
    redirect('/tutorial')
  )
}

export default Home