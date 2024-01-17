import { createBrowserRouter } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Contact from "../pages/Contact";
import About from "../pages/About";
import App from "../App";

import { adminPaths } from "./admin.routes";
import { generateRoute } from "../utils/routeGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: generateRoute(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: generateRoute(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: generateRoute(studentPaths),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
