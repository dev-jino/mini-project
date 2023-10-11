import "./ItemDetail.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
import github_logo from "../assets/images/github-icon.png";
import item from "../assets/images/order-check-item-img.png";

function ItemDetail() {
    return (
        <div class="item-detail">
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
            <div class="title"><div class="title-msg">상품 상세</div></div>
            <div class="row">
              <div class="item-detail-left"><div class="item-detail-img"></div></div>
              <div class="item-detail-right">
                <div class="item-detail-name"><div class="item-detail-name-2">나이키2</div></div>
                <div class="item-detail-price"><div class="item-detail-price-2">210,000원</div></div>
                <div class="item-detail-quantity">
                  <div class="number-input">
                    <div class="button"><img class="icon" src="img/image.svg" /></div>
                    <div class="input"><div class="value">1</div></div>
                    <div class="button"><img class="icon" src="img/icon.svg" /></div>
                  </div>
                </div>
                <div class="item-detail-hr"></div>
                <div class="item-detail-button">
                  <div class="button-cart"><div class="text-wrapper-2">장바구니</div></div>
                  <div class="button-buy"><div class="text-wrapper-2">구매하기</div></div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="item-detail-hr-2"></div>
              <div class="item-detail-lowprice">
                <div class="item-detail-lowprice-2">네이버 최저가</div>
                <div class="item-detail-lowprice-3">
                  <div class="item-detail-lowprice-4"></div>
                  <div class="item-detail-lowprice-5">
                    <div class="item-detail-name-wrapper"><div class="item-detail-name-2">나이키2</div></div>
                    <div class="item-detail-price-wrapper"><div class="item-detail-price-2">210,000원</div></div>
                  </div>
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

export default ItemDetail;