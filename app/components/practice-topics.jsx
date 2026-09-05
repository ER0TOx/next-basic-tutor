import React from 'react'
import labs from './labs'

function PracticeTopics() {
  return (
    <>
        {labs.map((topics, index) => (
          <p key={index}>{topics}</p>
        ))}
    </>
  )
}

export default PracticeTopics