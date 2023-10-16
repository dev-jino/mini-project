import { useIsLoginState, IsLoginContext } from "../contexts/IsLoginContext";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

function Logout() {
    const isLogin = useIsLoginState();
    const { setIsLogin } = useContext(IsLoginContext);
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
        setIsLogin(false);
        navigate('/');
    }, []);
    
    return (
        <></>
    );
}

export default Logout;