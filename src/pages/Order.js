import "./Order.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";

function Order() {
    return (
        <div class="order">
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
            <div class="title"><div class="title-msg">주문</div></div>
            <div class="row">
              <div class="item-order-left">
                <div class="item-order-item">
                  <div class="item-order-item-img"></div>
                  <div class="item-order-item-info">
                    <div class="item-order-item-name">나이키2</div>
                    <div class="item-order-item-2">수량 : 1</div>
                    <div class="item-order-item-2">210,000원</div>
                  </div>
                </div>
                <div class="item-order-item">
                  <div class="item-order-item-img-2"></div>
                  <div class="item-order-item-info">
                    <div class="item-order-item-name">나이키2</div>
                    <div class="item-order-item-2">수량 : 1</div>
                    <div class="item-order-item-2">210,000원</div>
                  </div>
                </div>
                <div class="item-order-item-name-wrapper">
                  <div class="item-order-item-name-2">합계 금액 : 420,000원</div>
                </div>
              </div>
              <div class="item-order-right">
                <div class="div-2">
                  <div class="text-wrapper-2">수령인</div>
                  <div class="home-search-input"></div>
                </div>
                <div class="div-2">
                  <div class="text-wrapper-2">전화번호</div>
                  <div class="home-search-input"></div>
                </div>
                <div class="item-order-user">
                  <div class="text-wrapper-2">주소</div>
                  <div class="home-search-input-2"></div>
                  <div class="button-buy"><div class="button-buy-text">우편번호 찾기</div></div>
                  <div class="home-search-input"></div>
                  <div class="home-search-input"></div>
                </div>
                <div class="item-detail-hr"></div>
                <div class="item-detail-button">
                  <div class="button-buy-text-wrapper"><div class="button-buy-text-2">주문하기</div></div>
                </div>
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
                    <img class="logo-img" src={logo} />
                  </div>
                  <p class="footer-text">현재 웹 사이트는 Mini-Project의 일환으로 실제로 물건을 판매하지 않습니다.</p>
                </div>
              </div>
              <div class="col">
                <div class="row-3">
                  <img class="git-hub" src={github_logo}/>
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

export default Order;