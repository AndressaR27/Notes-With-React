import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { New } from "../pages/New"
import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { Profile } from "../pages/Profile"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/new",
        element: <New />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/details/:id",
        element: <Details />
    }
])

export function AppRoutes(){
    return (
        <RouterProvider router={router} />
    )
};