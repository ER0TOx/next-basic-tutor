import React from 'react'
import Video from './Video'
import labs from './labs'

function PTProfile() {
  return (
    <div className="tutor-content-blocks" id="lab-profile">
        <div className="tutor-content-inside">
            <div className="tutor-content-sub">
                <h4>{labs[3]}</h4>
                <ul>
                    <li>สร้างโปรไฟล์จำลอง</li>
                    <li>ใส่รูปพื้นหลังและหน้าได้</li>
                    <li>ใส่ชื่อได้</li>
                </ul>
                <Video src='/lab-profile.mp4'/>
            </div>
        </div>
    </div>
  )
}

export default PTProfile