import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

class TaskList extends React.Component<Props> {
  render() {
    return (
      <div>
        {this.props.tasks.map((task, idx) => (
          <div key={idx} className="TaskItem" id="TaskItem">
            <Task title={task.title} description={task.description} dueDate={task.dueDate} />
          </div>
        ))}
      </div>
    );
  }
}

export default TaskList;
