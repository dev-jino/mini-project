import "./AdminJoin.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function AdminJoin() {
    return (
        <div class="admin-join">
            <div class="wrapper">
                <Header />
                <div class="main">
                    <div class="container-2">
                        <div class="title"><div class="title-msg">관리자 회원가입</div></div>
                        <div class="row">
                            <div class="col">
                                <div class="admin-join-info">
                                    <div class="admin-join-text">아이디 (이메일)</div>
                                    <div class="admin-join-error">
                                        <div class="admin-join-error-2">이메일 형식이 아닙니다.</div>
                                        <div class="admin-join-error-3">필수 입력 항목입니다.</div>
                                    </div>
                                    <div class="admin-join-input"></div>
                                </div>
                                <div class="admin-join-info">
                                    <div class="admin-join-text">비밀번호</div>
                                    <div class="admin-join-error"><div class="admin-join-error-3">필수 입력 항목입니다.</div></div>
                                    <div class="admin-join-input"></div>
                                </div>
                                <div class="admin-join-info">
                                    <div class="admin-join-text">비밀번호 확인</div>
                                    <div class="admin-join-error">
                                        <div class="admin-join-error-2">필수 입력 항목입니다.</div>
                                        <div class="admin-join-error-3">비밀번호가 일치하지 않습니다.</div>
                                    </div>
                                    <div class="admin-join-input"></div>
                                </div>
                                <div class="admin-join-info">
                                    <div class="admin-join-text">이름</div>
                                    <div class="admin-join-error"><div class="admin-join-error-3">필수 입력 항목입니다.</div></div>
                                    <div class="admin-join-input"></div>
                                </div>
                                <div class="admin-join-info">
                                    <div class="admin-join-text">전화번호</div>
                                    <div class="admin-join-error"><div class="admin-join-error-3">필수 입력 항목입니다.</div></div>
                                    <div class="admin-join-input"></div>
                                </div>
                                <div class="admin-join-info-2">
                                    <div class="admin-join-text">주소</div>
                                    <div class="admin-join-error"><div class="admin-join-error-4">필수 입력 항목입니다.</div></div>
                                    <div class="admin-join-input-2"></div>
                                    <div class="button-find-zipcode"><div class="button-find-zipcode-2">우편번호 찾기</div></div>
                                    <div class="admin-join-input"></div>
                                    <div class="admin-join-input"></div>
                                </div>
                                <div class="admin-join-button">
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

export default AdminJoin;