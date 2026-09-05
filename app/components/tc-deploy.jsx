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
          <p>Deploy คือการนำเว็บที่ build แล้วไปวางไว้บน Server เพื่อให้คนอื่นเข้าถึงผ่านอินเทอร์เน็ต</p>
          <CodeBlock code='npm i -g vercel
vercel' title='ติดตั้ง Vercel CLI แล้วรันเพื่อ deploy ไปยังเว็บจริง' language='terminal'/>
        </div>
        <DoLAB lab={labs[4]} link='/practice'/>
      </div>
    </div>
  )
}

export default TCDeploy