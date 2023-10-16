import { useIsLoginState, IsLoginContext } from "../contexts/IsLoginContext";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "./HeaderMenu.css";

function HeaderMenu() {
    const isLogin = useIsLoginState();
    const { setIsLogin } = useContext(IsLoginContext);
    const navigate = useNavigate();

    const logoutHandler = () => {
        sessionStorage.clear();
        setIsLogin(false);
        navigate('/');
    }

    const UserMenu = () => {
        return (
            <div className="main_menu">
                {/* <div className="menu-item"><div className="menu-item-txt">장바구니</div></div> */}
                {/* <div className="menu-item"><div className="menu-item-txt">주문조회</div></div> */}
                {/* <div className="menu-item"><div className="text-wrapper">마이페이지</div></div> */}
                {/* <div className="menu-item"><div className="menu-item-txt" onClick={logoutHandler}>로그아웃</div></div> */}
    
                <div className="menu_item"><div className="menu_item_txt"><Link to='/cart'>장바구니</Link></div></div>
                <div className="menu_item"><div className="menu_item_txt"><Link to='/order-check'>주문조회</Link></div></div>
                {/* <div className="menu-item"><div className="text-wrapper"><Link to='mypage'>마이페이지</Link></div></div> */}
                {/* <div className="menu_item"><div className="menu_item_txt"><Link onClick={logoutHandler}>로그아웃</Link></div></div> */}
                <div className="menu_item"><div className="menu_item_txt"><Link to='/logout'>로그아웃</Link></div></div>
            </div>
        );
    }

    const Menu = () => {
        return (
            <div className="main_menu">
                <div className="menu_item"><div className="menu_item_txt"><Link to='/login'>로그인</Link></div></div>
            </div>
        );
    }

    return <>{isLogin === true ? UserMenu() : Menu()}</>;
}

export default HeaderMenu;