import React from 'react';
import './TaskCard.css';

interface TaskCardProps {
  type: string;
  date: string;
  title: string;
  assignee: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ type, date, title, assignee }) => {
  const displayDate = type === "d" ? `Completed on: ${date}` : `Assigned on: ${date}`;

  return (
    <div className='TaskItem'>
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{displayDate}</p>
      <p>Assignee: {assignee}</p>
    </div>
  );
};

export default TaskCard;
