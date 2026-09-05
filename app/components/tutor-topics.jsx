"use client";

import React from 'react'
import topics from './topics'

function scrollToTopic(topic) {
  const headings = document.querySelectorAll('.main-content h2');
  const target = [...headings].find((h) => h.textContent === topic);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function TutorTopics() {
  return (
    <>
      {topics.map((topic, index) => (
        <p key={index} onClick={() => scrollToTopic(topic)}>{topic}</p>
      ))}
    </>
  )
}

export default TutorTopics