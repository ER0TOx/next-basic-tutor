import React from "react";
import topics from "./topics";

function TCRendering() {
  return (
    <div className="tutor-content-blocks">
      <h2>{topics[1]}</h2>
      <div className="tutor-content-inside">
        <div className="tutor-content-sub">
          <h4>CSR (Client-side rendering)</h4>
          <p>กระบวนการทั้งหมดเกิดในฝั่งผู้ใช้ ใช้ทรัพยากรเครื่องของผู้ใช้</p>
          <p>เหมือนกับซื่อสูตรอาหารมาทำเองที่บ้าน</p>
        </div>
        <div className="tutor-content-sub">
          <h4>SSR (Server-side rendering)</h4>
          <p>กระบวนการทั้งหมดเกิดที่ฝั่ง Server การ Render ทุกอย่างจะทำเสร็จก่อนแล้วค่อยส่งให้ Client</p>
          <p>เหมือนกับซื่ออาหารตามสั่งแล้วกินได้เลย</p>
        </div>
        <div className="tutor-content-sub">
          <h4>SSG (Static-site rendering)</h4>
          <p>Render HTML ล่วงหน้าตั้งแต่ก่อน Build ข้อเสียคือมันเป็นไฟล์คงที่ไม่มีการอัพเดทไดๆ</p>
        </div>
      </div>
    </div>
  );
}

export default TCRendering;
