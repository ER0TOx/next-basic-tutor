import React from 'react'
import topics from "./topics";
import DoLAB from './DoLAB';
import labs from './labs';
import CodeBlock from './CodeBlock';

function TCApi() {
  return (
    <div className="tutor-content-blocks">
      <h2>{topics[10]}</h2>
      <div className="tutor-content-inside">
        <div className="tutor-content-sub">
          <h4>Fetch</h4>
          <p>API คือตัวกลางสื่อสารระหว่าง Software สองตัวที่มีระบบคอมพิวเตอร์ที่ต่างกันได้</p>
          <CodeBlock code="'use client'
import React, { useEffect, useState } from 'react'
async function getData() {
    const data = await fetch('https://dummyjson.com/users');
    if (!data.ok) {
        throw new Error('Failed to fetch');
    }
    return data.json();
}
function Dummy() {
    const [data,setData] = useState(null);
    useEffect(() => {
        getData().then(res => {
            setData(res);
            console.log(res);
        })
    }, []);
    return (
    <>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}
export default Dummy" title='สร้าง component สำหรับเรียกใช้ API จาก DummyJSON' language='dummy.jsx'/>
        </div>
        {/* <div className="tutor-content-sub">
          <h4>เรียกใช้ Gemini API</h4>
          <CodeBlock code="'use server'
import { GoogleGenAI } from &quot;@google/genai&quot;;
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});
export async function Gemini(prompt) {
  if (!prompt || typeof prompt !== &quot;string&quot;) {
    return &quot;&quot;;
  }
  try {
    const response = await ai.models.generateContent({
      model: &quot;gemini-2.5-flash&quot;,
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error(&quot;Gemini generation error:&quot;, error);
    throw new Error(&quot;Failed to generate text&quot;);
  }
}" title='สร้าง Component สำหรับติดต่อกับ gemini api' language='gemini.js'/>
        <CodeBlock code='' title='เรียกใช้ Gemini' language='page.jsx'/>
        </div> */}
        <DoLAB lab={labs[3]} link='/practice'/>
      </div>
    </div>
  )
}

export default TCApi