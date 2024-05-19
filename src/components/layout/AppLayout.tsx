import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


const AppLayout = () => {
    return (
        <div className="w-full min-h-[100vh] flex flex-col justify-start gap-10">
            <Header />
            <div className="max-w-[1700px] w-full">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout
