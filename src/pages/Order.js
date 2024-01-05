import "./Order.css";
import Post from "../components/Post";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Order() {
  const [addressObj, setAddressObj] = useState({
    zonecode : '',
    fullAddress : ''
  });
  const [orderItemLists, setOrderItemLists] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [orderData, setOrderData] = useState({
    username : JSON.parse(sessionStorage.getItem("userData"))[0].nickname,
    phone : JSON.parse(sessionStorage.getItem("userData"))[0].phone,
    address1 : JSON.parse(sessionStorage.getItem("userData"))[0].address1,
    address2 : JSON.parse(sessionStorage.getItem("userData"))[0].address2,
    address3 : JSON.parse(sessionStorage.getItem("userData"))[0].address3,
    name : "",
    quantity : 0,
    price : 0
  });
  const [orderTransfer, setOrderTransfer] = useState(false);

  useEffect(() => {
    const userIdInput = JSON.parse(sessionStorage.getItem("userData"))[0].userid;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3001/order_item?userid=${userIdInput}`);
    xhr.setRequestHeader("content-type", "application-json");
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        const items = JSON.parse(xhr.response);

        console.log(items);
        setOrderItemLists(items);
        setTotalPrice(calculateTotalPrice);
      }
    };

    console.log("JSON.parse(sessionStorage.getItem('userData') : ",JSON.parse(sessionStorage.getItem('userData')));
  }, []);

  

  // useEffect(() => {
  //   console.log(addressObj);
  //   setOrderData({
  //     ...orderData, 
  //     address1: addressObj.zonecode,
  //     address2: addressObj.fullAddress
  //   })
  // }, [addressObj]);

  const calculateTotalPrice = () => {
    let result = orderItemLists.reduce((acc, cur, index) => {
      return acc + cur.price;
    }, 0);

    return result;
  }

  useEffect(() => {
    console.log('new', orderData);
      if (orderTransfer === true) {
      const xhr = new XMLHttpRequest();
      const data = JSON.stringify(orderData);
      
      xhr.open("POST", "http://localhost:3001/order");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.send(data);
      
      xhr.onload = () => {
          if (xhr.status === 201) {
              console.log('성공');
              } else {
                  console.log(xhr.status, xhr.statusText);
        }
      };
    }
    console.log('if문 바깥쪽');
    setOrderTransfer(false);
  }, [orderTransfer]);

  const handleOrder = () => {
    setOrderData((prevState) => {
      return {
        ...prevState,
        name : orderItemLists[0].name,
        quantity : orderItemLists[0].quantity,
        price : orderItemLists[0].price
      }
    })
    setOrderTransfer(true);
    console.log("orderData : ", orderData);
  }

  return (
    <div class="order">
      <div class="wrapper">
        {/* <Header /> */}
        <div class="main">
          <div class="container-2">
            <div class="title">
              <div class="title-msg">주문</div>
            </div>
            <div class="row">
              <div class="item-order-left">
                <ul>
                  {orderItemLists.map((orderItem, index) => {
                    return (
                      <li key={index} class="item-order-item">
                        <img class="item-order-item-img" src={orderItem.img} />
                        <div class="item-order-item-info">
                          <div class="item-order-item-name">{orderItem.name}</div>
                          <div class="item-order-item-2">수량 : {orderItem.quantity}</div>
                          <div class="item-order-item-2">{orderItem.price}원</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div class="item-order-item-name-wrapper">
                  <div class="item-order-item-name-2">
                    합계 금액 : {calculateTotalPrice()}원
                  </div>
                </div>
              </div>
              <div class="item-order-right">
                <div class="div-2">
                  <div class="text-wrapper-2">수령인</div>
                  <input class="home-search-input" 
                    value={JSON.parse(sessionStorage.getItem("userData"))[0].nickname} 
                    onChange={(e) =>
                      setOrderData((prevState) => {
                        return { ...prevState, username: e.target.value };
                      })
                    }
                  >
                   </input>
                </div>
                <div class="div-2">
                  <div class="text-wrapper-2">전화번호</div>
                  <input class="home-search-input"
                    value={JSON.parse(sessionStorage.getItem("userData"))[0].phone}
                    onChange={(e) =>
                      setOrderData((prevState) => {
                        return { ...prevState, phone: e.target.value };
                      })
                    }
                  >
                  </input>
                </div>
                <div class="item-order-user">
                  <div class="text-wrapper-2">주소</div>
                  <input class="home-search-input-2" 
                    value={addressObj.zonecode || JSON.parse(sessionStorage.getItem("userData"))[0].address1} readOnly>
                  </input>
                  <Post setAddressObj={setAddressObj}/>
                  <input class="home-search-input" 
                    value={addressObj.fullAddress || JSON.parse(sessionStorage.getItem("userData"))[0].address2} readOnly>
                  </input>
                  <input class="home-search-input" 
                    value={JSON.parse(sessionStorage.getItem("userData"))[0].address3}
                    onChange={(e) =>
                      setOrderData((prevState) => {
                        return { ...prevState, address3: e.target.value };
                      })
                    }
                  >
                  </input>
                </div>
                <div class="item-detail-hr"></div>
                <div class="item-detail-button">
                  <div class="button-buy-text-wrapper">
                    <Link to='/payready'><div class="button-buy-text-2" onClick={handleOrder}>주문하기</div></Link>
                  </div>
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

export default Order;