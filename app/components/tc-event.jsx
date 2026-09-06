import React from 'react'
import topics from "./topics";
import DoLAB from './DoLAB';
import labs from './labs';
import CodeBlock from './CodeBlock';

function TCEvent() {
  return (
    <div className="tutor-content-blocks">
      <h2>{topics[9]}</h2>
      <div className="tutor-content-inside">
        <div className="tutor-content-sub">
          <h4>onChange</h4>
          <p>onChange จะถูกเรียกทุกครั้งที่ค่าของ input เปลี่ยน เช่น การพิมพ์ในช่องข้อความ</p>
          <CodeBlock code='&quot;use client&quot;
import React from &#39;react&#39;
import { useState } from &#39;react&#39;
function TextBox() {
    const [text,setText] = useState(&#39;&#39;);
  return (
    &lt;div className=&#39;w-fit&#39;&gt;
        &lt;input onChange={(e) =&gt; setText(e.target.value)} placeholder=&#39;พิมพ์ข้อความ&#39; /&gt;
        &lt;p&gt;{text}&lt;/p&gt;
    &lt;/div&gt;
  )
}
export default TextBox' title='สร้าง input ที่เก็บค่าที่พิมพ์ไว้ใน state และแสดงผลทันที' language='textbox.jsx'/>
        </div>
        <div className="tutor-content-sub">
          <h4>onSubmit</h4>
          <p>onSubmit จะถูกเรียกเมื่อส่ง form โดยใช้ preventDefault เพื่อไม่ให้หน้าเว็บ reload</p>
          <CodeBlock code='&quot;use client&quot;
import React from &#39;react&#39;
import { useState } from &#39;react&#39;
function Form() {
    const [name,setName] = useState(&#39;&#39;);
    const [submitted,setSubmitted] = useState(&#39;&#39;);
    const handleSubmit = (e) =&gt; {
        e.preventDefault();
        setSubmitted(name);
    };
  return (
    &lt;form onSubmit={handleSubmit}&gt;
        &lt;input value={name} onChange={(e) =&gt; setName(e.target.value)} /&gt;
        &lt;button type=&#39;submit&#39;&gt;Submit&lt;/button&gt;
        &lt;p&gt;{submitted}&lt;/p&gt;
    &lt;/form&gt;
  )
}
export default Form' title='สร้าง form ที่เมื่อกด Submit จะนำค่าที่กรอกไปแสดงผล' language='form.jsx'/>
        </div>
        <DoLAB lab={labs[2]} link='/practice#lab-list'/>
        <DoLAB lab={labs[3]} link='/practice#lab-profile'/>
      </div>
    </div>
  )
}

export default TCEvent