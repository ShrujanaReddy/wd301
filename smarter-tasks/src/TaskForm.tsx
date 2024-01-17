import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  title: string;
  description: string;
  dueDate: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      dueDate: "",
    };
  }

  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ title: event.target.value });
  };

  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ description: event.target.value });
  };

  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    this.setState({ dueDate: event.target.value });
  };

  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!this.state.title.trim() || !this.state.dueDate.trim()) {
      alert("Title and due date are required.");
      return;
    }

    const newTask = {
      title: this.state.title,
      description: this.state.description,
      dueDate: this.state.dueDate,
    };

    this.props.addTask(newTask);
    this.setState({ title: "", description: "", dueDate: "" });
  };

  render() {
    return (
      <form onSubmit={this.addTask}>
        <label htmlFor="todoTitle">Title:</label>
        <input
          type="text"
          id="todoTitle"
          value={this.state.title}
          onChange={this.titleChanged}
        />

        <label htmlFor="todoDescription">Description:</label>
        <input
          type="text"
          id="todoDescription"
          value={this.state.description}
          onChange={this.descriptionChanged}
        />

        <label htmlFor="todoDueDate">Due Date:</label>
        <input
          type="text"
          id="todoDueDate"
          value={this.state.dueDate}
          onChange={this.dueDateChanged}
        />

        <button type="submit" id="addTaskButton">
          Add item
        </button>
      </form>
    );
  }
}

export default TaskForm;
