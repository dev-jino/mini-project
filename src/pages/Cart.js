import "./Cart.css";
import item from "../assets/images/order-check-item-img.png";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Cart() {
  // const [item, setItem] = useState("");
  const [cartItemLists, setCartItemLists] = useState([]);
  const [orderItemLists, setOrderItemLists] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const userIdInput = JSON.parse(sessionStorage.getItem("userData"))[0].userid;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3001/cart?userid=${userIdInput}`);
    xhr.setRequestHeader("content-type", "application-json");
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const items = JSON.parse(xhr.response);

        setCartItemLists(items);
      }
    };
  }, []);

  // console.log("cartItemLists.find : ", cartItemLists);

  const calculateTotalPrice = () => {
    let result = cartItemLists.reduce((acc, cur, index) => {
      return acc + cur.price;
    }, 0);

    return result;
  }

  const handleBuy = () => {
    console.log("item3 : ", item);
    console.log(JSON.parse(sessionStorage.getItem("userData")));
    if (!JSON.parse(sessionStorage.getItem("userData"))) {
      if (window.confirm("로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?")) {
        navigate('/login');
      }
    } else {
      const userIdInput = JSON.parse(sessionStorage.getItem("userData"))[0].userid;
      console.log(orderItemLists);
      setOrderItemLists((prevState) => {
        return {
          category : item[0].category,
          idx : item[0].idx,
          img : item[0].img,
          name : item[0].name,
          price : item[0].price,
          quantity : item[0].quantity,
          reg_date : item[0].reg_date,
          userid : userIdInput
        };
      });

      if (window.confirm("상품이 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?")) { 
        navigate('/cart');
        // console.log("cartItem222 : ", cartItem);
      }
    }
  }

  return (
    <div class="cart">
      <div class="wrapper">
        {/* <Header /> */}
        <div class="main">
          <div class="container-2">
            <div class="title">
              <div class="title-msg">장바구니</div>
            </div>
            <div class="row">
              <div class="cart-col">
                <ul>
                {cartItemLists.map((cartItem, index) => {
                  console.log(cartItem);
                  // setTotalPrice(prev => prev + cartItem.price);
                  
                  return (
                    <li key={index} id={index} class="cart-item">
                      <input type="checkbox" class="check-box" />
                      <img class="cart-item-img" src={cartItem.img} />
                      <div class="cart-item-info">
                        <div class="cart-item-name">{cartItem.name}</div>
                        <div class="text-wrapper-2">수량 : {cartItem.quantity}</div>
                        <div class="text-wrapper-2">{cartItem.price}원</div>
                      </div>
                    </li>
                  );
                })}
                </ul>
                <div class="cart-item-totalprice">
                  <div class="order-check-item">합계 금액 : {calculateTotalPrice()}원</div>
                </div>
              </div>
              <div class="cart-button">
                <div class="button-delete">
                  <button class="button-delete">삭제하기</button>
                </div>
                <div class="button-buy">
                  <button class="button-buy" onClick={handleBuy}>구매하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default Cart;
