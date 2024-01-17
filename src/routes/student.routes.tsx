import AdminDashboard from "../pages/admin/AdminDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "EnrolledCourses",
    path: "enrolledcourses",
    element: <OfferedCourse />,
  },
];
