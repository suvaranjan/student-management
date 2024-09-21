import { createBrowserRouter } from "react-router-dom";
import Home from "./Home"; // Import your Home component
import AddStudentForm from "./components/AddStudentForm";
import StudentList from "./components/StudentList";
import About from "./components/About";
import StudentDetails from "./components/StudentDetails";
import NavLayout from "./NavLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      {
        path: "/", // This matches the index route
        element: <Home />, // Render the Home component
      },
      {
        path: "students/add-student",
        element: <AddStudentForm />,
      },
      {
        path: "students",
        element: <StudentList />,
      },
      {
        path: "students/:id",
        element: <StudentDetails />,
      },
      {
        path: "students/edit/:id",
        element: <AddStudentForm />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
