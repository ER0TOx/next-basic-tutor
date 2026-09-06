import React from "react";
import "@/app/globals.css";

import TutorTopics from '@/app/components/tutor-topics'
import TopLists from '@/app/components/top-lists'
import TutorContent from '@/app/components/tutor-contents.jsx'
import ScrollMemory from '@/app/components/scroll-memory'

function page() {
  return (
    <div className="main-layout">
      <ScrollMemory/>
      <div className="main-top">
        <TopLists/>
      </div>
      <div className='main-down'>
        <div className="main-side">
          <TutorTopics/>
        </div>
        <div className="main-content">
            <TutorContent/>
        </div>
      </div>
    </div>
  );
}

export default page;
