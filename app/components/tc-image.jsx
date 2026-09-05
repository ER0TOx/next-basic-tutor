import React from "react";
import topics from "./topics";
import CodeBlock from "./CodeBlock";

function TCImage() {
  return (
    <div className="tutor-content-blocks">
      <h2>{topics[6]}</h2>
      <div className="tutor-content-inside">
        <div className="tutor-content-sub">
          <h4>Image</h4>
          <CodeBlock code="import React from 'react'
import Image from 'next/image'
function Home() {
  return (
    <>
      <Image src='/globe.svg' width={300} height={300}/>
    </>
  )
}
export default Home" title='เพิ่มรูปโดยใช้รูปจากไฟล์ public' language='page.jsx'/>
        </div>
        <div className="tutor-content-sub">
          <h4>Video</h4>
          <CodeBlock code='import React from "react";
function Video({src}) {
  return (
    <div className="video-group">
      <video autoPlay muted loop playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
} 
export default Video;' title='สร้าง component แล้วเขียนโค้ดนี้ลงไป เป็น Video เล่นซ้ำ' language='Video.jsx'/>
        </div>
      </div>
    </div>
  );
}

export default TCImage;
