import "./Home.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";

function Home() {
    return (
        <div class="home">
            <div class="wrapper">
                <div class="home-header-wrap">
                    <div class="container">
                        <div class="home-header">
                            <div class="logo-icon">
                                <div class="logo-text">HowMuch</div>
                                <img class="logo-img" src={logo} alt="로고" />
                            </div>
                            <div class="main-menu">
                                <div class="menu-item"><div class="menu-item-txt">장바구니</div></div>
                                <div class="menu-item"><div class="menu-item-txt">주문조회</div></div>
                                <div class="menu-item"><div class="text-wrapper">마이페이지</div></div>
                                <div class="menu-item"><div class="menu-item-txt">로그아웃</div></div>
                            </div>
                        </div>
                        <div class="cta">
                            <div class="home-search">
                                <div class="home-search-text">원하는 상품을 검색해보세요</div>
                                <div class="home-search-input">
                                    <img class="home-search-img" src={search_logo} alt="검색" />
                                    <input class="home-search-inputbox" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-items-section">
                    <div class="div">
                        <div class="title"><div class="title-msg">이런 상품 어때요?</div></div>
                        <div class="row">
                            <div class="home-item">
                                <div class="home-item-img"></div>
                                <div class="home-item-info">
                                    <div class="name">나이키 1</div>
                                    <div class="price">120,000원</div>
                                </div>
                            </div>
                            <div class="home-item-2">
                                <div class="home-item-img-2"></div>
                                <div class="home-item-info-2">
                                    <div class="name-2">나이키 2</div>
                                    <div class="price-2">210,000원</div>
                                </div>
                            </div>
                            <div class="home-item-3">
                                <div class="home-item-info">
                                    <div class="name">나이키 3</div>
                                    <div class="price">140,000원</div>
                                </div>
                                <div class="home-item-img-3"></div>
                            </div>
                            <div class="home-item-3">
                                <div class="home-item-info">
                                    <div class="name">나이키 4</div>
                                    <div class="price">90,000원</div>
                                </div>
                                <div class="home-item-img-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="row-wrapper">
                        <div class="row-2">
                            <div class="col">
                                <div class="row-3">
                                    <div class="logo-icon-2">
                                        <div class="logo-text">HowMuch</div>
                                        <img class="logo-img" src={logo} alt="로고" />
                                    </div>
                                    <p class="footer-text">현재 웹 사이트는 Mini-Project의 일환으로 실제로 물건을 판매하지 않습니다.</p>
                                </div>
                            </div>
                            <div class="col">
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

export default Home;