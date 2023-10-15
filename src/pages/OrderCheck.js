import "./OrderCheck.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import item from "../assets/images/order-check-item-img.png";
import Header from "../components/Header";
import Footer from "../components/Footer";

function OrderCheck() {
  return (
    <div class="order-check">
      <div class="wrapper">
        <Header />
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
        <Footer />
      </div>
    </div>
  )
}

export default OrderCheck;