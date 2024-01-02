import React from 'react'
import './TaskCard.css'

const TaskCard = (props) => {
  const { type, date, title, assignee } = props
  const displayDate = type === "d" ? `Completed on: ${date}` : `Assigned on: ${date}`

  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{displayDate}</p>
      <p>Assignee: {assignee}</p>
    </div>
  )
}

export default TaskCard
