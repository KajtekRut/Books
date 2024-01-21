import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../subsites/Login";
import Registration from "../subsites/Registration";
import MainPage from "../main_page/MainPage";
import { TodosPage } from "../todos/todosPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/registration",
        element: <Registration />
    },
    {
        path: '/todos',
        element: <TodosPage />
    }
])
export default function Router() {
    return <RouterProvider router={router} />;
}