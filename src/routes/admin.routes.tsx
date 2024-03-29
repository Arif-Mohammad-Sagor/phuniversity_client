import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "CreateStudent",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "CreateFaculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "CreateAdmin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];

// export const adminPaths = combineArray.reduce((acc: TRoute[], item) => {
//   if (item.path && item.element) {
//     acc.push({
//       path: item.path,
//       element: item.element,
//     });
//   }
//   if (item.children) {
//     item.children.forEach((child) => {
//       acc.push({
//         path: child.path,
//         element: child.element,
//       });
//     });
//   }
//   return acc;
// }, []);

// export const sideBarItems = combineArray.reduce(
//   (acc: TSidebarItems[], item) => {
//     if (item.name && item.path) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
//       });
//     }
//      if (item.children) {
//        acc.push({
//          key: item.name,
//          label: item.name,
//          children: item.children.map((child) => {
//            return {
//              key: child.name,
//              label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
//            };
//          }),
//        });
//      }
//     return acc;
//   },
//   []
// );
