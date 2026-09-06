import React from 'react'
import Video from './Video'
import labs from './labs'

function PTAI() {
  return (
    <div className="tutor-content-blocks" id="lab-chatbot">
        <div className="tutor-content-inside">
            <div className="tutor-content-sub">
                <h4>{labs[4]}</h4>
                <ul>
                    <li>สร้างเว็บ Chatbot ของตัวเองโดยใช้ API จาก Gemini, OpenAI หรือ Claude</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default PTAI