import "./AdminJoin.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";

function AdminJoin() {
    return (
        <div class="admin-join">
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
                <footer class="footer">
                    <div class="row-wrapper">
                        <div class="row-2">
                            <div class="div-wrapper">
                                <div class="row-3">
                                    <div class="logo-icon-2">
                                        <div class="logo-text">HowMuch</div>
                                        <img class="logo-img" src={logo} />
                                    </div>
                                    <p class="footer-text">현재 웹 사이트는 Mini-Project의 일환으로 실제로 물건을 판매하지 않습니다.</p>
                                </div>
                            </div>
                            <div class="div-wrapper">
                                <div class="row-3">
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

export default AdminJoin;