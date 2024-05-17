
import { AppLayout } from "../components";
import { Home } from "../pages";

export const RootRoutes = {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            index: true,
            element: <Home />,
        }
    ]
}