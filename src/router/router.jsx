import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/Register/Register";
import SignIn from "../signIn/SignIn";
import JobDetails from "../pages/JobDetails";
  
const router = createBrowserRouter([
    {
      path: "/",
        element: <MainLayout />,
        errorElement: <h2>Router not found</h2>,
        children: [
            {
                path: '/',
                element:<Home/>
            },
            {
                path: '/jobs/:id',
                element: <JobDetails />,
                loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
            },
            {
                path: '/register',
                element:<Register/>
            },
            {
                path: '/signIn',
                element:<SignIn/>
            }
      ]
    },
]);
export default router;