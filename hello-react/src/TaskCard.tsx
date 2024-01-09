import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  type: string;
  dueDate?: string;
  completedAtDate?: string;
  title: string;
  assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ type, dueDate, completedAtDate, title, assigneeName }) => {
  let displayDate = '';
  if (type === 'd' && completedAtDate) {
    displayDate = `Completed on: ${completedAtDate}`;
  } else if (dueDate) {
    displayDate = `Due on: ${dueDate}`;
  }

  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{title}</h2>
      {displayDate && <p>{displayDate}</p>}
      <p>Assignee: {assigneeName}</p>
    </div>
  );
};

export default TaskCard;
