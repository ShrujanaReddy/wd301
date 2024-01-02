import { useState } from 'react';
import TaskCard from './TaskCard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="font-bold text-2xl">Task Manager</h1>
      <h3 className="font-bold mt-2">Project: WD301</h3>
      <div className="flex mt-4">
        <div className="w-80 h-auto border rounded-lg p-4 mr-4">
          <h1 className="font-bold text-xl mb-4">Pending Tasks</h1>
          <TaskCard type="p" title="Build website" date="Jan 6" assignee="John" />
          <TaskCard type="p" title="Add blog" date="Jan 10" assignee="Ram" />
          <h3 className="mt-4 w-40 h-6 border mb-4" >New task</h3>
        </div>
        <div className="w-80 h-auto border rounded-lg p-4 ml-4">
          <h1 className="font-bold text-xl mb-4">Completed Tasks</h1>
          <TaskCard type="d" title="Design the mockup" date="Dec 31" assignee="Rohit" />
          <TaskCard type="d" title="Get approval" date="Dec 29" assignee="Rahul" />
        </div>
      </div>
    </div>
  );
}

export default App;
