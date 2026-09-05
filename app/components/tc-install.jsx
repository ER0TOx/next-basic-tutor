import React from 'react'
import CodeBlock from './CodeBlock'
import topics from './topics'
import Video from './Video'

function TCInstall() {
  return (
    <div className="tutor-content-blocks">
        <h2>{topics[2]}</h2>
        <div className="tutor-content-inside">
          <div className="tutor-content-sub">
            <h4>ติดตั้ง NodeJS</h4>
            <a href="https://nodejs.org/en/download" target='_blank'>NodeJS Download</a>
          </div>
          <div className="tutor-content-sub">
            <h4>สร้างโปรเจกต์</h4>
            <CodeBlock
              code="npx create-next-app@latest ."
              title="Command Prompt"
            />
          </div>
          <div className="tutor-content-sub">
            <h4>ตั้งค่าโปรเจกต์เพื่อใช้ Javascript</h4>
            <Video src='/next-tutor-1.mp4'/>
          </div>
          <div className="tutor-content-sub">
            <h4>รันเว็บ</h4>
            <CodeBlock code="npm run dev" title="Command Prompt" />
          </div>
          <div className="tutor-content-sub">
            <h4>ติดตั้ง Extension ใน Visual code</h4>
            <q>ES7+ React/Redux/React-Native snippets</q>
            <p>ใช้คำสั่ง <q>rfce</q> เพื่อวางโครงโค้ด React</p>
          </div>
        </div>
      </div>
  )
}

export default TCInstall