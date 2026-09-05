import React from "react";
import "@/app/globals.css";

import PracticeTopics from '@/app/components/practice-topics'
import TopLists from '@/app/components/top-lists'

function page() {
  return (
    <div className="main-layout">
      <div className="main-top">
        <TopLists/>
      </div>
      <div className='main-down'>
        <div className="main-side">
          <PracticeTopics/>
        </div>
        <div className="main-content"></div>
      </div>
    </div>
  );
}

export default page;
