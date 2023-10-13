// 페이지를 이동할 때 사용
//(특정 이벤트가 실행됐을 때 동작하도록 하거나 추가적인 로직이 필요한 경우 사용)
import { useNavigate } from 'react-router-dom';
import './KakaoLogin.css';
import axios from 'axios';
import { useEffect } from 'react';


function KakaoLogin() {
    useEffect(() => {
        const PARAMS = new URL(document.location).searchParams;
        const AUTHORIZE_CODE = PARAMS.get("code");
        const grant_type = "authorization_code";
        const REST_API_KEY = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
        const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`;
        // const REDIRECT_URI = "http://localhost:3000/join";
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
            console.log(res);
            const { data } = res;
            const { access_token } = data;
            console.log(access_token);

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
                    console.log(res);
                    console.log(res.data.properties);
                    console.log(res.data.kakao_account);
                });
            }
            
        });
    }, []);

    return (
        <></>
        // <div>
        //     Loading...
        // </div>
    );
}

export default KakaoLogin;