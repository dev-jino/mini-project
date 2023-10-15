import "./AdminLogin.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function AdminLogin() {
    return ( 
        <div class="admin-login">
      <div class="wrapper">
        <Header />
        
        <div class="main">
          <div class="container-2">
            <div class="title"><div class="title-msg">관리자 로그인</div></div>
            <div class="row">
              <div class="col">
                <div class="admin-login-info">
                  <div class="admin-login-text">아이디 (이메일)</div>
                  <div class="admin-login-input"></div>
                </div>
                <div class="admin-login-info">
                  <div class="admin-login-text">비밀번호</div>
                  <div class="admin-login-input"></div>
                </div>
                <div class="admin-login-button">
                  <div class="button-login"><div class="button-login-text">로그인</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    )
}

export default AdminLogin;