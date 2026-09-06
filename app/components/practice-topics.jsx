"use client";

import React from 'react'
import labs from './labs'

const labIds = [
    'lab-navbar',
    'lab-bigger',
    'lab-list',
    'lab-profile',
    'lab-chatbot',
    'lab-portfolio'
];

function scrollToLab(index) {
  const target = document.getElementById(labIds[index]);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function PracticeTopics() {
  return (
    <>
        {labs.map((topic, index) => (
          <p key={index} onClick={() => scrollToLab(index)}>{topic}</p>
        ))}
    </>
  )
}

export default PracticeTopics