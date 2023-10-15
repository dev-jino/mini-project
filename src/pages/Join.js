import "./Join.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Join() {

    return (
        <div class="join">
            <div class="wrapper">
                <Header />
                <div class="main">
                    <div class="container-2">
                        <div class="title"><div class="title-msg">회원가입</div></div>
                        <div class="row">
                            <div class="col">
                                <div class="join-info">
                                    <div class="join-text">아이디 (이메일)</div>
                                    <div class="join-error-wrap">
                                        <div class="join-error">이메일 형식이 아닙니다.</div>
                                        <div class="join-error-2">필수 입력 항목입니다.</div>
                                    </div>
                                    <div class="join-input"></div>
                                </div>
                                <div class="join-info">
                                    <div class="join-text">이름</div>
                                    <div class="join-error-wrap"><div class="join-error-2">필수 입력 항목입니다.</div></div>
                                    <div class="join-input"></div>
                                </div>
                                <div class="join-info">
                                    <div class="join-text">전화번호</div>
                                    <div class="join-error-wrap"><div class="join-error-2">필수 입력 항목입니다.</div></div>
                                    <div class="join-input"></div>
                                </div>
                                <div class="join-info-2">
                                    <div class="join-text">주소</div>
                                    <div class="join-error-wrap"><div class="join-error-3">필수 입력 항목입니다.</div></div>
                                    <div class="join-input-2"></div>
                                    <div class="button-find-zipcode"><div class="button-find-zipcode-2">우편번호 찾기</div></div>
                                    <div class="join-input"></div>
                                    <div class="join-input"></div>
                                </div>
                                <div class="join-button">
                                    <div class="button-confirm"><div class="button-confirm-text">가입하기</div></div>
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

export default Join;