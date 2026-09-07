import React from 'react'
import topics from './topics'
import Video from './Video'
import CodeBlock from './CodeBlock'

function TCPagelink() {
  return (
    <div className="tutor-content-blocks">
        <h2>{topics[4]}</h2>
        <div className="tutor-content-inside">
          <div className="tutor-content-sub">
            <h4>สร้าง Page</h4>
            <Video src='/pagelink-1.mp4'/>
            <ul>
              <li>สร้างโฟลเดอร์ชื่ออะไรก็ได้ จากตัวอย่างจะใช้ชื่อ <q>about</q></li>
              <li>สร้างไฟล์ชื่อ page.jsx แล้วเขียนอะไรลงไปก็ได้</li>
            </ul>
          </div>
          <div className="tutor-content-sub">
            <h4>Path</h4>
            <Video src='/pagelink-2.mp4'/>
          </div>
          <div className="tutor-content-sub">
            <h4>Link</h4>
            <p>เขียนใว้ที่ page.jsx หลัก</p>
            <CodeBlock code="import React from 'react'
import Link from 'next/link'
function Home() {
  return (
    <>
      <Link href='/about'>Click me</Link>
    </>
  )
}
export default Home" title='Link' language='page.jsx'/>
            <p>ผลลัพธ์</p>
            <Video src='/pagelink-3.mp4'/>
          </div>
        </div>
      </div>
  )
}

export default TCPagelink