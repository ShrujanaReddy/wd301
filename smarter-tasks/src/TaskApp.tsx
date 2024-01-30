import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}

class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    const storedTasks = localStorage.getItem("tasks");
    this.state = {
      tasks: storedTasks ? JSON.parse(storedTasks) : [],
    };
    const initialTasks = storedTasks ? JSON.parse(storedTasks) : [];
    
    // Ensure that tasks is always initialized as an array
    this.state = {
      tasks: Array.isArray(initialTasks) ? initialTasks : [],
    };
  }

  addTask = (task: TaskItem) => {
    this.setState(
      (state) => ({
        tasks: [...state.tasks, task],
      }),
      () => {
        // Update localStorage after state has been updated
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  deleteTask = (index: number) => {
    this.setState(
      (state) => ({
        tasks: state.tasks.filter((_, i) => i !== index),
      }),
      () => {
        // Update localStorage after state has been updated
        localStorage.setItem("tasks", JSON.stringify(this.state.tasks));
      }
    );
  };

  render() {
    return (
      <div className="container py-10 max-w-4xl mx-auto">
        <h1 className="text-3xl mb-2 font-bold text-slate-700">
          Smarter Tasks
        </h1>
        <h1 className="text-lg mb-6 text-slate-600">
          <span className="font-bold">Project: </span>
          Graduation Final Year Project (Revamp college website)
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-slate-200 rounded-xl p-4">
            <h1 className="text-slate-500 text-xl font-bold text-center mb-2">
              Pending
            </h1>
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask}/>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskApp;