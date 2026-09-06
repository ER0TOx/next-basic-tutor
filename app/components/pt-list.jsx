import React from 'react'
import Video from './Video'
import labs from './labs'

function PTList() {
  return (
    <div className="tutor-content-blocks" id="lab-list">
        <div className="tutor-content-inside">
            <div className="tutor-content-sub">
                <h4>{labs[2]}</h4>
                <ul>
                    <li>สร้างการเพิ่ม List</li>
                    <li>มี Input: ชื่อ อายุ เกรด</li>
                    <li>กดปุ่มเพิ่มรายชื่อด้านล่าง</li>
                </ul>
                <Video src='/lab-list.mp4'/>
            </div>
        </div>
    </div>
  )
}

export default PTList