import React from 'react'
import topics from "./topics";
import CodeBlock from './CodeBlock';
import Video from './Video';

function TCAgent() {
  return (
    <div className="tutor-content-blocks">
      <h2>{topics[7]}</h2>
      <div className="tutor-content-inside">
        <div className="tutor-content-sub">
          <h4>ติดตั้ง</h4>
          <CodeBlock code='npm i -g opencode-ai' title='command prompt'/>
        </div>
        <div className="tutor-content-sub">
          <h4>เรียกใช้</h4>
          <CodeBlock code='opencode' title='command prompt'/>
          <Video src='/opencode-1.mp4'/>
        </div>
        <div className="tutor-content-sub">
          <h4>ตั้งค่า Model</h4>
          <CodeBlock code='/models' title='command prompt'/>
          <Video src='/opencode-2.mp4'/>
        </div>
      </div>
    </div>
  )
}

export default TCAgent