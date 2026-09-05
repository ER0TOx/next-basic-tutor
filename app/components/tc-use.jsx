import React from 'react'
import topics from "./topics";
import DoLAB from './DoLAB';
import labs from './labs';
import CodeBlock from './CodeBlock';
import Video from './Video';

function TCUse() {
  return (
    <div className="tutor-content-blocks">
      <h2>{topics[8]}</h2>
      <div className="tutor-content-inside">
        <div className="tutor-content-sub">
          <h4>useState</h4>
          <p>ปกติเราไม่สามารถสร้างตัวแปรที่ปกติเราทำใน javascript ได้เช่น let x = 1; จริงๆมันก็ทำได้แต่ไม่สามารถนำตัวแปรพวกนี้ไปแสดงผลบนเว็บได้</p>
          <p>useState จะเป็นการกำหนดตัวแปรใหม่ใน NextJS ที่สามารถขึ้นแสดงบนเว็บได้</p>
          <CodeBlock code="'use client'
import React from 'react'
import { useState } from 'react'
function Number() {
    const [num,setNum] = useState(0);
  return (
    <h1>{num}</h1>
  )
}
export default Number" title='สร้างตัวแปร num ที่เป็น Integer เท่ากับ 0' language='number.jsx'/>
          <CodeBlock code='&quot;use client&quot;
import React from &#39;react&#39;
import { useState } from &#39;react&#39;
function Counter() {
    const [num,setNum] = useState(0);
  return (
    &lt;div className=&#39;rounded-lg border p-4 w-fit&#39;&gt;
        &lt;h3&gt;Counter: {num}&lt;/h3&gt;
        &lt;button onClick={() =&gt; setNum(num+1)}&gt;Click me&lt;/button&gt;
    &lt;/div&gt;
  )
}
export default Counter' title='สร้าง Component Counter ขึ้นมาแล้วไปใช้ใน page.jsx' language='counter.jsx'/>
        <Video src='/use-1.mp4'/>
        <CodeBlock code="&quot;use client&quot;
import React from 'react'
import { useState } from 'react'
function Counter() {
    const [num,setNum] = useState(0);
    const [green, setGreen] = useState(0);

    const style = {
      backgroundColor: `rgb(0,${green},0)`,
      color: 'white'
    };
  return (
    <div className='rounded-lg border p-4 w-fit'>
        <h3 style={style}>Counter: {num}</h3>
        <button onClick={() => {
          setNum(num + 1);
          setGreen(green + 3);
        }}>Click me</button>
    </div>
  )
}
export default Counter" title='Counter ที่ยิ่งกดยิ่งเขียว' language='counter.jsx'/>
        </div>
        <div className="tutor-content-sub">
          <h4>useEffect</h4>
          <CodeBlock code='"&quot;use client&quot;
import React from &#39;react&#39;
import { useState, useEffect } from &#39;react&#39;
function Counter() {
    const [num,setNum] = useState(0);
    useEffect(() =&gt; {
      document.title = `You clicked ${num} times`;
    }, [num]);
  return (
    &lt;div className=&#39;rounded-lg border p-4 w-fit&#39;&gt;
        &lt;h3&gt;Counter: {num}&lt;/h3&gt;
        &lt;button onClick={() =&gt; setNum(num+1)}&gt;Click me&lt;/button&gt;
    &lt;/div&gt;
  )
}
export default Counter"' title='State เปลี่ยนจะทำให้หน้าเว็บ re-render ใหม่แล้ว useEffect จะตรวจว่า num เปลี่ยนจากรอบก่อนหรือไม่ ถ้าเปลี่ยนให้รันคำสั่งใน useEffect ทันที' language='counter.jsx'/>
        </div>
        <DoLAB lab={labs[1]} link='/practice'/>
      </div>
    </div>
  )
}

export default TCUse