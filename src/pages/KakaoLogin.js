// 페이지를 이동할 때 사용
//(특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우 사용)
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { IsLoginContext } from '../contexts/IsLoginContext';

function KakaoLogin() {
    const { setIsLogin } = useContext(IsLoginContext);
    const [loginUserInfo, setLoginUserInfo] = useState({
        id:"",
        nickname:"",
        email:"",
        data:""
    });
    const navigate = useNavigate();

    useEffect(() => {
        const PARAMS = new URL(document.location).searchParams;
        const AUTHORIZE_CODE = PARAMS.get("code");
        const grant_type = "authorization_code";
        const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
        const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
        
        // axios
        axios.post(`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`,
            {},
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;",
                },
            }
        )
        .then((res) => {
            const { data } = res;
            const { access_token } = data;

            if (access_token) {
                console.log(`Bearer ${access_token}`);
                axios.post(
                    "https://kapi.kakao.com/v2/user/me",
                    {},
                    {
                        headers: {
                            Authorization: `Bearer ${access_token}`,
                            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8;",
                        },
                    }
                )
                .then((res) => {
                    setLoginUserInfo({id:res.data.id, nickname:res.data.kakao_account.nickname, email:res.data.kakao_account.email, data:data});
                });
            }
        });
    }, []);

    useEffect(() => {
        if (loginUserInfo.id != '' && loginUserInfo.kakao_account != '') {
            FindUserData(loginUserInfo);
        }
    }, [loginUserInfo]);

    function FindUserData(tokenData) {
        const tokenUserId = tokenData.id;
        const sessionStorage = window.sessionStorage;
        const xhr = new XMLHttpRequest();
    
        xhr.open("GET", `http://localhost:3001/user?userid=${tokenUserId}`);
        xhr.setRequestHeader("content-type", "application/json");
        xhr.send(null);
        xhr.onload = () => {
            if (xhr.status === 200) {
                const users = JSON.parse(xhr.response);

                sessionStorage.setItem("access_token", tokenData.data.access_token);
                sessionStorage.setItem("refresh_token", tokenData.data.refresh_token);

                if (users.length === 0) {
                    navigate('/join', {state: tokenData});
                } else {
                    sessionStorage.setItem("userData", JSON.stringify(users));
                    setIsLogin(true);
                    navigate('/');
                }
            } else {
                console.log(xhr.status, xhr.statusText);
            }
        }
    }

    return (
        <div>
            Loading...
        </div>
    );
}

export default KakaoLogin;