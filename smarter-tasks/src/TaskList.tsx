// TaskList.tsx
import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  deleteTask: (index: number) => void;
}

class TaskList extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.tasks.map((task, idx) => (
          <div key={idx} className="TaskItem">
            <Task
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
            />
            <button
              className="deleteTaskButton"
              onClick={() => this.props.deleteTask(idx)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;
