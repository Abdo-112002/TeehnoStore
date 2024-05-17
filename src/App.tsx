import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { RootRoutes } from "./routes/Root";

const router = createBrowserRouter([RootRoutes]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
