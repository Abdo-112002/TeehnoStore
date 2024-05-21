
import { AppLayout } from "../components";
import { Home, Products } from "../pages";

export const RootRoutes = {
    path: "/",
    element: <AppLayout />,
    children: [
        {
            index: true,
            element: <Home />,
        },
        {
            path: "products",
            element: <Products />,
        }
    ]
}