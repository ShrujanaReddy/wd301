import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface TaskItem {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

const TaskDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [taskAppState, setTaskAppState] = useState<{ tasks: TaskItem[] }>({
    tasks: [],
  });
  const [task, setTask] = useState<TaskItem | undefined>();

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      const parsedTasks = JSON.parse(storedTasks) as TaskItem[];
      setTaskAppState({ tasks: parsedTasks });
      setTask(parsedTasks.find((task) => task.id === id));
    } else {
      setTask(undefined);
    }
  }, []);

  useEffect(() => {
    setTask(taskAppState.tasks.find((task) => task.id === id));
  }, [taskAppState]);

  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {task ? (
        <><div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">{task.title}</h3>
        </div><p className="text-gray-600">{task.description}</p><p className="text-gray-600">{task.dueDate}</p></>
      ) : (
        <p>Loading task details...</p>
      )}
    </div>
  );
};

export default TaskDetailsPage;
