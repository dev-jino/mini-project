import "./ItemDetail.css";
import GetItems from "../components/GetItems";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Header.module.css"

function ItemDetail() {
  const params = useParams();
  const [item, setItem] = useState({});
  const [itemCount, setItemCount] = useState(1);
  const [cartItem, setCartItem] = useState({});
  const [orderItem, setOrderItem] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log("item1 : ", item);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3001/items?name=${params.item}`);
    xhr.setRequestHeader("content-type", "application-json");
    xhr.send(null);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        setItem(data);
      }
    }
    console.log("item2 : ", item);
  }, []);

  useEffect(() => {
    console.log('new', cartItem);
    if (JSON.stringify(cartItem) !== '{}') {
      const xhr = new XMLHttpRequest();
      const data = JSON.stringify(cartItem);
    
      xhr.open("POST", "http://localhost:3001/cart");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.send(data);
    
      xhr.onload = () => {
        if (xhr.status === 201) {
          console.log('성공');
          if (window.confirm("상품이 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?")) { 
            navigate('/cart');
            // console.log("cartItem222 : ", cartItem);
          }
        } else {
          console.log(xhr.status, xhr.statusText);
        }
      };
    }
  }, [cartItem]);

  const handleCart = () => {
    console.log("item3 : ", item);
    console.log(JSON.parse(sessionStorage.getItem("userData")));
    if (!JSON.parse(sessionStorage.getItem("userData"))) {
      if (window.confirm("로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?")) {
        navigate('/login');
      }
    } else {
      const userIdInput = JSON.parse(sessionStorage.getItem("userData"))[0].userid;

      setCartItem(() => {
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

      // if (window.confirm("상품이 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?")) { 
      //   // navigate('/cart');
      //   console.log("cartItem222 : ", cartItem);
      // }
    }
  };

  useEffect(() => {
    console.log('new', orderItem);
    if (JSON.stringify(orderItem) !== '{}') {
      const xhr = new XMLHttpRequest();
      const data = JSON.stringify(orderItem);
    
      xhr.open("POST", "http://localhost:3001/order_item");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.send(data);
    
      xhr.onload = () => {
        if (xhr.status === 201) {
          console.log('성공');
          alert('주문 페이지로 이동합니다.');
          navigate('/order');
        } else {
          console.log(xhr.status, xhr.statusText);
        }
      };
    }
  }, [orderItem]);

  const handleBuy = () => {
    if (!JSON.parse(sessionStorage.getItem("userData"))) {
      if (window.confirm("로그인이 필요합니다.\n로그인 페이지로 이동하시겠습니까?")) {
        navigate('/login');
        // alert('홈으로');
      }
    } else {
      const userIdInput = JSON.parse(sessionStorage.getItem("userData"))[0].userid;

      setOrderItem(() => {
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

      // if (window.confirm("상품이 장바구니에 담겼습니다.\n장바구니로 이동하시겠습니까?")) { 
        // alert('주문 페이지로 이동합니다.');
        // // navigate('/order');
        console.log("orderItem : ", orderItem);
      // }
    }
  }

  const handleItemCount = (e) => {
    setItemCount(e.target.value);
  }

  return (
    <div className="item-detail">
      <div className="wrapper">
        <Header />
        <div className="main">
          <div className="container-2">
            <div className="title">
              <div className="title-msg">상품 상세</div>
            </div>
            <div className="row">
              <div className="item-detail-left">
                <img
                  className="item-detail-img"
                  src={item.length && item[0].img}
                ></img>
              </div>
              <div className="item-detail-right">
                <div className="item-detail-name">
                  <div className="item-detail-name-2">
                    {item.length && item[0].name}
                  </div>
                </div>
                <div className="item-detail-price">
                  <div className="item-detail-price-2">
                    {item.length && item[0].price}원
                  </div>
                </div>
                <div className="item-detail-quantity">
                  <div className="number-input">
                    {/* <div className="button"><img className="icon" src="img/image.svg" /></div>
                        <div className="input"><div className="value">{item.length && item[0].quantity}</div></div>
                        <div className="button"><img className="icon" src="img/icon.svg" /></div> */}
                    {/* <div className="input"> */}
                    <input className="input" type="number" value={itemCount} onChange={handleItemCount}/>
                    {/* </div> */}
                  </div>
                </div>
                <div className="item-detail-hr"></div>
                <div className="item-detail-button">
                  <div className="button-cart">
                    <button className="button-cart" onClick={handleCart}>
                      장바구니
                    </button>
                  </div>
                  <div className="button-buy">
                    <button className="button-buy" onClick={handleBuy}>
                      구매하기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom">
              <div className="item-detail-hr-2"></div>
              <div className="item-detail-lowprice">
                <div className="item-detail-lowprice-2">네이버 최저가</div>
                <GetItems key={item.length} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ItemDetail;
