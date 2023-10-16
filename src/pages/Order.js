import "./Order.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Order() {
    return (
        <div class="order">
      <div class="wrapper">
        {/* <Header /> */}
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
       {/* <Footer /> */}
      </div>
    </div>
    )
}

export default Order;