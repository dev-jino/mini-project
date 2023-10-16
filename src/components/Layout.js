import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
    return (
        // <div className="item-detail">
        // <div className="wrapper">
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
        // </div>
        // </div>
    )
}

export default Layout;