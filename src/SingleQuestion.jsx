import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

function SingleQuestion({ title, info }) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion
