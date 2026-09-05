import React from 'react'
import topics from './topics'
import ImageBox from './ImageBox'
import Video from './Video'

function TCStruct() {
  return (
    <div className="tutor-content-blocks">
        <h2>{topics[3]}</h2>
        <div className="tutor-content-inside">
            <ImageBox src="/struct.png" alt="Image" />
            <div className="tutor-content-sub">
                <h4>app</h4>
                <p>พื้นที่ทำงานหลัก</p>
                <ImageBox src='/struct-app.png' alt='Image'/>
                <ul>
                    <li>page.jsx - หน้าแรกของเว็บ</li>
                    <li>layout.jsx - โครงสร้างของเว็บ</li>
                    <li>globals.css - CSS นี้จะส่งผลต่อทุก Page</li>
                </ul>
            </div>
            <div className="tutor-content-sub">
                <h4>public</h4>
                <p>ที่จัดเก็บไฟล์ภาพ, เสียง หรือวิดีโอ เพื่อไปเรียกใช้อีกทีในโฟลเดอร์ <q>app</q></p>
            </div>
            <div className="tutor-content-sub">
                <h4>ลบโค้ดเริ่มต้นออกเพื่อเริ่มเขียนเอง</h4>
                <Video src='/struct-restart.mp4'/>
                <p>ลบ <q>geistSans.variable และ geistMono.variable</q> ใน layout.jsx ออก</p>
                <Video src='/struct-forgot.mp4'/>
            </div>
        </div>
    </div>
  )
}

export default TCStruct