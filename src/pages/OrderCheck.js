import "./OrderCheck.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import item from "../assets/images/order-check-item-img.png";

function OrderCheck() {
    return (
        <div class="order-check">
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
            <div class="title"><div class="title-msg">주문조회</div></div>
            <div class="row">
              <div class="order-check-col">
                <div class="order-check-item">
                  <img class="order-check-item-img" src={item} />
                  <div class="order-check-item-2">
                    <div class="item-order-item-name">나이키2</div>
                    <div class="item-order-item">수량 : 1</div>
                    <div class="item-order-item">210,000원</div>
                  </div>
                </div>
                <div class="order-check-item">
                  <div class="order-check-item-img-2"></div>
                  <div class="order-check-item-2">
                    <div class="item-order-item-name">나이키2</div>
                    <div class="item-order-item">수량 : 1</div>
                    <div class="item-order-item">210,000원</div>
                  </div>
                </div>
                <div class="order-check-item-wrapper"><div class="order-check-item-3">합계 금액 : 420,000원</div></div>
              </div>
              <div class="order-check-col-2">
                <div class="order-check-item">
                  <img class="order-check-item-img" src={item} />
                  <div class="order-check-item-2">
                    <div class="item-order-item-name">나이키2</div>
                    <div class="item-order-item">수량 : 1</div>
                    <div class="item-order-item">210,000원</div>
                  </div>
                </div>
                <div class="order-check-item-wrapper"><div class="order-check-item-3">합계 금액 : 210,000원</div></div>
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

export default OrderCheck;