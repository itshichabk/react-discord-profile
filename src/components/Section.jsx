import React from 'react'
import '../css/Section.css'

function Section({title, text}) {
  return (
    <div className="card-section">
        <h4>{title}</h4>
        <p>{text}</p>
    </div>
  )
}

export default Section