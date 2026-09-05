import React from 'react'
import topics from "./topics";
import DoLAB from './DoLAB';
import labs from './labs';
import CodeBlock from './CodeBlock';

function TCDeploy() {
  return (
    <div className="tutor-content-blocks">
      <h2>{topics[12]}</h2>
      <div className="tutor-content-inside">
        <div className="tutor-content-sub">
          <h4>Build</h4>
          <p>Build คือการแปลง Project ให้เป็นเวอร์ชันพร้อมใช้งานจริง (production) ใช้ตรวจสอบว่าโค้ดไม่มี error</p>
          <CodeBlock code='npm run build
npm run start' title='ตรวจสอบว่าโค้ด build ได้หรือไม่ แล้วเปิดด้วย production server' language='terminal'/>
        </div>
        <div className="tutor-content-sub">
          <h4>Deploy</h4>
          <ul>
            <li>เข้าไปสร้าง Respository ใน <a href="https://github.com/" target='_blank'>Github</a></li>
            <li>ให้ push ทั้งโปรเจกต์เข้า Respository ที่พึ้งสร้าง</li>
            <li>เข้าเว็บ <a href="https://vercel.com/" target='_blank'>Vercel</a> แล้ว Add new project</li>
            <li>เลือก Respository ของ Github ตัวเองแล้วกด import</li>
            <li>สามารถกด Deploy ได้เลย แต่ถ้าเว็บตัวเองมีการใช้ Database หรือ API ก็ต้องเพิ่ม Environment variable เข้าไป</li>
          </ul>
        </div>
        <DoLAB lab={labs[4]} link='/practice'/>
      </div>
    </div>
  )
}

export default TCDeploy