import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignIn />
    },
    {
        path: "/register",
        element: <SignUp />
    }
])

export function AuthRoutes(){
    return (
        <RouterProvider router={router} />
    )
};