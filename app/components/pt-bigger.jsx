import React from 'react'
import Video from './Video'
import labs from './labs'

function PTBigger() {
  return (
    <div className="tutor-content-blocks" id="lab-bigger">
        <div className="tutor-content-inside">
            <div className="tutor-content-sub">
                <h4>{labs[1]}</h4>
                <ul>
                    <li>สร้างปุ่มที่ยิ่งกดยิ่งใหญ่ขึ้น</li>
                </ul>
                <Video src='/lab-bigger.mp4'/>
            </div>
        </div>
    </div>
  )
}

export default PTBigger