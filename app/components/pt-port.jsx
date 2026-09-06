import React from 'react'
import Video from './Video'
import labs from './labs'

function PTPort() {
  return (
    <div className="tutor-content-blocks" id="lab-portfolio">
        <div className="tutor-content-inside">
            <div className="tutor-content-sub">
                <h4>{labs[5]}</h4>
                <ul>
                    <li>สร้าง Portfolio ของตัวเองยังไงก็ได้</li>
                    <li>พร้อม Host ด้วย Vercel ให้ทุกคนเข้าถึงได้</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PTPort