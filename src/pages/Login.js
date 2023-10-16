import "./Login.css";
import kakao_login_img from "../assets/images/kakao_login_img.png";

function Login() {
  const Rest_api_key = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const redirect_uri = `${process.env.REACT_APP_REDIRECT_URI}`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

  const MoveKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  }

  return (
    <div class="login">
      <div class="wrapper">
        <div class="main">
          <div class="container-2">
            <div class="title"><div class="title-msg">로그인</div></div>
            <div class="order-check-pre">
              <button class="button-confirm" onClick={MoveKakaoLogin}>
                <img class="" src={kakao_login_img}></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;