import { Outlet } from "react-router-dom"


const AppLayout = () => {
    return (
        <div>
            <p>nav</p>
            <Outlet />
            <p>footer</p>
        </div>
    )
}

export default AppLayout
