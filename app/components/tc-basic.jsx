import React from 'react'
import topics from './topics'
import CodeBlock from './CodeBlock';

function TCBasic() {
  return (
    <div className="tutor-content-blocks">
        <h2>{topics[0]}</h2>
        <div className="tutor-content-inside">
          <div className="tutor-content-sub">
            <h4>Frameworks คืออะไร</h4>
            <p>JavaScript Framework คือชุดเครื่องมือสำเร็จรูปที่ช่วยให้เขียนเว็บได้เร็วขึ้น เพราะมีโครงสร้าง ระบบจัดการข้อมูล และส่วนประกอบให้ใช้ซ้ำได้ โดยไม่ต้องเริ่มจากศูนย์</p>
          </div>
          <div className="tutor-content-sub">
            <h4>ตัวอย่าง JavaScript Frameworks</h4>
            <p>Framework เพิ่มขึ้นทุกปี แต่ 4 ตัวนี้เป็นตัวเด่นที่นิยมใช้แพร่หลายที่สุด</p>
            <h5 style={{ width: 'fit-content', backgroundColor: '#4b5563', color: 'white', padding: '8px 12px', borderRadius: '4px', border: '1px solid black', boxShadow: '2px 2px 0 1px black', margin: 8 }}>1. Next.js</h5>
            <p>Framework ที่สร้างบน React มีทั้ง CSR, SSR และ SSG ใช้ทำเว็บเต็มรูปแบบในตัวเดียว</p>
            <CodeBlock code='import React from &quot;react&quot;
function Home() {
  return &lt;h1&gt;Hello Next.js&lt;/h1&gt;
}
export default Home' title='สร้างหน้าเว็บด้วย file-based routing คือการสร้างไฟล์ในโฟลเดอร์ app' language='page.jsx'/>
            <h5 style={{ width: 'fit-content', backgroundColor: 'blue', color: 'white', padding: '8px 12px', borderRadius: '4px', border: '1px solid black', boxShadow: '2px 2px 0 1px black', margin: 8 }}>2. React</h5>
            <p>Library สำหรับสร้าง UI ด้วย Component ซึ่งเป็น Foundation ของ Next.js</p>
            <CodeBlock code='import React from &quot;react&quot;
function App() {
  return &lt;h1&gt;Hello React&lt;/h1&gt;
}
export default App' title='เขียน Component ที่เป็นส่วนของ UI แล้วนำไปประกอบเป็นหน้าเว็บ' language='App.jsx'/>
            <h5 style={{ width: 'fit-content', backgroundColor: 'green', color: 'white', padding: '8px 12px', borderRadius: '4px', border: '1px solid black', boxShadow: '2px 2px 0 1px black', margin: 8 }}>3. Vue</h5>
            <p>Framework ที่อ่านง่าย เขียนยากน้อย ติดตั้งและเริ่มได้ไว ใช้ Template แบบ HTML</p>
            <CodeBlock code='&lt;template&gt;
  &lt;h1&gt;{{ message }}&lt;/h1&gt;
&lt;/template&gt;
&lt;script setup&gt;
  const message = &quot;Hello Vue&quot;
&lt;/script&gt;' title='สร้าง Component ที่มีทั้ง Template กับ Logic ในไฟล์เดียว' language='Component.vue'/>
            <h5 style={{ width: 'fit-content', backgroundColor: 'pink', color: 'white', padding: '8px 12px', borderRadius: '4px', border: '1px solid black', boxShadow: '2px 2px 0 1px black', margin: 8 }}>4. Angular</h5>
            <p>Framework ที่ครบทุกอย่างแบบ Enterprise มี TypeScript, Dependency Injection และเครื่องมือในตัว</p>
            <CodeBlock code='import { Component } from &quot;@angular/core&quot;
@Component({ selector: &quot;app-root&quot;, template: &quot;&lt;h1&gt;Hello Angular&lt;/h1&gt;&quot; })
export class AppComponent {}' title='ใช้ Decorator @Component กำหนด selector กับ template ให้ Component' language='app.component.ts'/>
          </div>
          <div className="tutor-content-sub">
            <h4>ทำไมต้อง NextJS</h4>
            <p>เพราะ Next.js เอา React มาเพิ่มความสามารถให้ครบ ในตัวเดียว:</p>
            <ul>
              <li>เลือกได้ทั้ง CSR, SSR และ SSG ตามความเหมาะสมของแต่ละหน้า</li>
              <li>File-based Routing สร้างหน้าแบบไม่ต้องจัด route ด้วยมือ</li>
              <li>มี API Route เขียน Backend ไว้ในโปรเจกต์เดียวกันได้</li>
              <li>Optimize รูปภาพและโหลดเร็วขึ้นอัตโนมัติ</li>
              <li>Deploy ง่ายด้วย Vercel ซึ่งเป็นผู้สร้าง Next.js เอง</li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default TCBasic