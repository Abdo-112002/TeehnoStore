import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"


const AppLayout = () => {
    return (
        <div className="w-full max-w-[2000px] flex flex-col justify-start gap-10">
            <NavBar />
            <Outlet />
            <p>عبده</p>
        </div>
    )
}

export default AppLayout
