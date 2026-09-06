import React from "react";
import "@/app/globals.css";
import '@/app/components/tutor-contents.css'

import PracticeTopics from '@/app/components/practice-topics'
import TopLists from '@/app/components/top-lists'
import PracticeContents from "../components/practice-contents";
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
          <PracticeTopics/>
        </div>
        <div className="main-content">
          <PracticeContents/>
        </div>
      </div>
    </div>
  );
}

export default page;
