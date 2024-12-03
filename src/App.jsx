import "./App.css";
import AppLayout from "./components/layout/appLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Ui/home";
import Skills from "./components/pages/skills";
import Tools from "./components/pages/tools";
import Projects from "./components/pages/projects";
import Resume from "./components/pages/resume";
import Form from "./components/pages/form";
import ErrorPage from "./components/pages/errorPage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "skills",
          element: <Skills />,
        },
        {
          path: "tools",
          element: <Tools />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "resume",
          element: <Resume />,
        },
        {
          path: "form",
          element: <Form />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
