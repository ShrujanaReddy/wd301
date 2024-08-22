import { Suspense, useContext } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes"
import { ThemeContext } from "./context/theme";
import {ProjectsProvider} from "./context/projects/context"
import { MembersProvider } from "./context/members/context";
import { CommentProvider } from "./context/comment/context";
import './i18n'

const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="w-full">
        <ProjectsProvider>
        <MembersProvider>
          <CommentProvider>
            <Suspense fallback={<>Loading...</>}>
            <RouterProvider router={router} />
          </Suspense>
          </CommentProvider>
        </MembersProvider>
      </ProjectsProvider>
      </div>
      <div>
      <button onClick={() => { throw new Error("Test Sentry Error") }}>
        Trigger Error
      </button>
    </div>
    </div>
  );
};
export default App;