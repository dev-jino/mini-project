import "./Login.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import kakao_login_img from "../assets/images/kakao_login_img.png";
import kakao_join_img from "../assets/images/kakao_join_img.png";

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
        <div class="header">
          <div class="container">
            <div class="div">
              <div class="logo-icon">
                <div class="logo-text">HowMuch</div>
                <img class="logo-img" src={logo} />
              </div>
              <div class="header-input"><img class="search-icon" src={search_logo} /></div>
              <div class="main-menu">
                <div class="menu-item"><div class="menu-item-txt">장바구니</div></div>
                <div class="menu-item"><div class="menu-item-txt">주문조회</div></div>
                <div class="menu-item"><div class="text-wrapper">마이페이지</div></div>
                <div class="menu-item"><div class="menu-item-txt">로그아웃</div></div>
              </div>
            </div>
          </div>
        </div>
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
        <footer class="footer">
          <div class="row-wrapper">
            <div class="row">
              <div class="col">
                <div class="row-2">
                  <div class="logo-icon-2">
                    <div class="logo-text">HowMuch</div>
                    <img class="logo-img" src={logo} />
                  </div>
                  <p class="footer-text">현재 웹 사이트는 Mini-Project의 일환으로 실제로 물건을 판매하지 않습니다.</p>
                </div>
              </div>
              <div class="col">
                <div class="row-2">
                  <img class="git-hub" src={github_logo} />
                  <p class="p">현재 웹사이트의 소스 코드는 하단의 Git Hub에서 확인하실 수 있습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Login;