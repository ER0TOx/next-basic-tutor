import React from 'react'
import topics from './topics'
import CodeBlock from './CodeBlock'
import Video from './Video'
import DoLAB from './DoLAB'
import labs from './labs'

function TCComponent() {
  return (
    <div className="tutor-content-blocks">
        <h2>{topics[5]}</h2>
        <div className="tutor-content-inside">
          <div className="tutor-content-sub">
            <h4>Component คืออะไร</h4>
            <ul>
              <li>มันคือแม่พิมพ์ที่หยิบมาใช้สร้างซ้ำๆได้ ต่างจากเขียน HTML ดั้งเดิมที่ต้องก็อปโค้ดแล้ววางบรรทัดถัดไป</li>
              <li>และมีสิ่งที่เรียกว่า props ที่เป็นเหมือน function parameter ใน C เป็นตัวตัดแต่งแม่พิมพ์</li>
            </ul>
          </div>
          <div className="tutor-content-sub">
          <h4>ขั้นตอนการสร้าง Component</h4>
          <ul>
            <li>สร้างโฟลเดอร์ <q>components</q></li>
            <li>สร้างไฟล์ ชื่อ.jsx</li>
            <li>ลองเขียน</li>
            <CodeBlock code="import React from 'react'
    function test() {
      return (
          <h1 className='rounded-lg border p-4 bg-blue-200'>Hello world</h1>
        )
      }
export default test"
        title="Example"
        language="NextJS"
        />
          </ul>
          <Video src='/com-1.mp4'/>
          </div>
          <div className="tutor-content-sub">
            <h4>Props</h4>
            <p>ตัวตัดแต่งแม่พิมพ์ (Components)</p>
            <CodeBlock code="import React from 'react'
    function Test({text, color}) {
      return (
          <h1 className={`rounded-lg border p-4 bg-blue-200`} style={{'color': color}}>{text}</h1>
        )
      }
export default Test" title='เขียนแก้ใน components/Test.jsx เพิ่ม props: text และ color' language='Test.jsx'/>
            <CodeBlock code="import React from 'react'
import Test from './components/test'
function Home() {
  return (
    <>
      <Test text='This is props' color='green'/>
    </>
  )
}
export default Home" title='กำหนด text และ color ใว้ใน tag "Test"' language='page.jsx'/>
          <p>ลองเพิ่ม Test แล้วแก้ text/color ให้แตกต่างกันดู</p>
          </div>

          <div className="tutor-content-sub">
            <h4>Children</h4>
            <CodeBlock code="import React from 'react'
    function Test({children, color}) {
      return (
          <h1 className={`rounded-lg border p-4 bg-blue-200`} style={{'color': color}}>{children}</h1>
        )
      }
export default Test" title='แก้ไขเปลี่ยนจาก "text" เป็น "children"' language='Test.jsx'/>
            <CodeBlock code="import React from 'react'
import Test from './components/test'
function Home() {
  return (
    <>
      <Test color='green'>Hello world</Test>
    </>
  )
}
export default Home" title='ลบ text ออกแล้วเปลี่ยนมาใช้รูปแบบ <Test></Test> วิธีการกำหนดข้อความจะไปอยู่ในกรอบของ tag Test' language='page.jsx'/>
          <p>ลองเพิ่ม Test แล้วแก้ children/color ให้แตกต่างกันดู</p>
          </div>
          <div className="tutor-content-sub">
            <h4>Style</h4>
            <ul style={{listStyleType: 'decimal'}}>
              <li>Global CSS</li>
              <p>เป็น Style ที่ครอบคลุมทั้งโปรเจกต์</p>
              <li>CSS Modules</li>
              <p>เป็น Style ทำงานแค่ภายใน components</p>
              <li>CSS in jsx</li>
              <p>เป็น Style ทำงานแค่ภายในไฟล์ jsx</p>
            </ul>
          </div>
          <div className="tutor-content-sub">
            <DoLAB lab={labs[0]} link='/practice'/>
          </div>
        </div>
      </div>
  )
}

export default TCComponent