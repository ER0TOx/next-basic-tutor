import React from 'react'
import Video from './Video'
import labs from './labs'

function PTNavbar() {
  return (
    <div className="tutor-content-blocks" id="lab-navbar">
        <div className="tutor-content-inside">
            <div className="tutor-content-sub">
                <h4>{labs[0]}</h4>
                <ul>
                    <li>สร้าง Navbar โดยมี Home, About, Docs, Community</li>
                    <li>เนื้อหาด้านล่างจะเป็นอะไรก็ได้</li>
                </ul>
                <Video src='/lab-navbar.mp4'/>
            </div>
        </div>
    </div>
  )
}

export default PTNavbar