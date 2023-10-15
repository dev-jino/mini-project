import "./Login.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import kakao_login_img from "../assets/images/kakao_login_img.png";
import kakao_join_img from "../assets/images/kakao_join_img.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Login() {
  const Rest_api_key = `${process.env.REACT_APP_KAKAO_REST_API_KEY}`;
  const redirect_uri = `${process.env.REACT_APP_REDIRECT_URI}`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`

  const MoveKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
    // window.open(KAKAO_AUTH_URL, "KakaoLogin", "width=400, height=300");
  }

  {/* ************************************ */}
  const MoveKakaoLogout = () => {

  }
  {/* ************************************ */}

  return (
    <div class="login">
      <div class="wrapper">
        <Header />
        <div class="main">
          <div class="container-2">
            <div class="title"><div class="title-msg">로그인</div></div>
            <div class="order-check-pre">
              {/* <div class="button-confirm">
                <div class="button-confirm-text">카카오 로그인</div>
              </div> */}
              <button class="button-confirm" onClick={MoveKakaoLogin}>
                <img class="" src={kakao_login_img}></img>
              </button>
            </div>
            {/* ************************************ */}
            <div class="title"><div class="title-msg">로그아웃</div></div>
            <div class="order-check-pre">
              <button class="button-confirm" onClick={MoveKakaoLogout}>
                <img class="" src={kakao_login_img}></img>
              </button>
            </div>
            {/* ************************************ */}
            <div class="title"><div class="title-msg">회원이 아니시라면...?</div></div>
            {/* <div class="button-confirm">
              <div class="button-confirm-text">카카오로 시작하기</div>
            </div> */}
            <button class="button-confirm">
              <img class="" src={kakao_join_img}></img>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Login;