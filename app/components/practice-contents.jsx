import React from 'react'
import PTNavbar from './pt-navbar'
import PTProfile from './pt-profile'
import PTPort from './pt-port'
import PTBigger from './pt-bigger'
import PTList from './pt-list'
import PTAI from './pt-ai'

function PracticeContents() {
  return (
    <>
        <PTNavbar/>
        <PTBigger/>
        <PTList/>
        <PTProfile/>
        <PTAI/>
        <PTPort/>
    </>
  )
}

export default PracticeContents