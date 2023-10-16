import "./Cart.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import item from "../assets/images/order-check-item-img.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function Cart() {
    return (
        <div class="cart">
      <div class="wrapper">
        {/* <Header /> */}
        <div class="main">
          <div class="container-2">
            <div class="title"><div class="title-msg">장바구니</div></div>
            <div class="row">
              <div class="cart-col">
                <div class="cart-item">
                  <div class="check-box"></div>
                  <img class="cart-item-img" src={item} />
                  <div class="cart-item-info">
                    <div class="cart-item-name">나이키2</div>
                    <div class="text-wrapper-2">수량 : 1</div>
                    <div class="text-wrapper-2">210,000원</div>
                  </div>
                </div>
                <div class="cart-item">
                  <div class="check-box"></div>
                  <img class="cart-item-img" src={item} />
                  <div class="cart-item-info">
                    <div class="cart-item-name">나이키2</div>
                    <div class="text-wrapper-2">수량 : 1</div>
                    <div class="text-wrapper-2">210,000원</div>
                  </div>
                </div>
                <div class="cart-item-totalprice"><div class="order-check-item">합계 금액 : 420,000원</div></div>
              </div>
              <div class="cart-button">
                <div class="button-delete"><div class="text-wrapper-3">삭제하기</div></div>
                <div class="button-buy"><div class="text-wrapper-3">구매하기</div></div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
  
      </div>
    </div>
    )
}

export default Cart;