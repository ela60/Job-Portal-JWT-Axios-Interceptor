import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Home/Register/Register";
  
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
                path: '/register',
                element:<Register/>
            }
      ]
    },
]);
export default router;