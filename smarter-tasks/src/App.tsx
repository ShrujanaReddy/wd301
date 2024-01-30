import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import Layout from "./components/Layout";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import './App.css';

const router = createBrowserRouter([
  {
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/",
        element: (<HomePage />)
      },
      {
        path: "tasks",
        element: (<TaskListPage />)
      },
      {
        path: "tasks/:id",
        element: (<TaskDetailsPage />)
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App