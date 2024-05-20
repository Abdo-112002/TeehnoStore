import { Outlet } from "react-router-dom"
import { Footer, Header } from '../../components';

const AppLayout = () => {
    return (
        <div className="w-full min-h-[100vh] flex flex-col justify-start gap-10">
            <Header />
            <div className="max-w-[1700px] w-full flex flex-col justify-start gap-10">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default AppLayout
