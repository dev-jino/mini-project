import { useState, useEffect } from "react";
import axios from "axios";
import "./PayResult.css";
// window.localStorage.removeItem("name");
// window.localStorage.removeItem("price");
// window.localStorage.removeItem("quantity");

function PayResult() {

  // const [userData, setUserData] = useState();
  // const [order, setOrder] = useState({
  //   order_idx: "",
  //   user_idx: "",
  //   order_date: "",
  //   order_address: "",
  //   order_name: "",
  //   order_phone: "",
  //   order_price: 0, 
  // })
  // const [init, setInit] = useState(order);
  const query = window.location.search;
  const param = new URLSearchParams(query);
  const [params, setParams] = useState({
    cid: "TC0ONETIME",
    tid: window.localStorage.getItem("tid"),
    partner_order_id: "partner_order_id",
    partner_user_id: "partner_user_id",
    pg_token: "",
  });
  const [prevParams, setPrevParams] = useState(params);

  if (params !== prevParams) {
    axios({
      url: "https://kapi.kakao.com/v1/payment/approve",
      method: "POST",
      headers: {
        Authorization: "KakaoAK ae3ef7e66d1721cd8c214020d71aa988",
        "Content-Type": "application/json;charset=utf-8", 
      },
      params: params,
    }).then((response) => {
      console.log(params);
      console.log(response);
    });
  }

  useEffect(() => {
    const query = window.location.search;
    const param = new URLSearchParams(query);

    // url에 붙어서 온 pg_token을 결제 API에 줄 params에 할당
    setParams({ ...params, pg_token: param.get("pg_token") });

}, [])

  return (
    <div className="wrapper">
      <h1>결제 완료</h1>
      <hr />
      결제번호 : {param.get("pg_token")}<br />
      상품명 : {window.sessionStorage.getItem("name")}<br />
      수량 : {window.sessionStorage.getItem("quantity")}<br />
      총 결제액 : {window.sessionStorage.getItem("quantity") * window.sessionStorage.getItem("price")}<br />
      주문자: {JSON.parse(window.sessionStorage.getItem("userData"))[0].nickname}<br />
      주문자 연락처: {JSON.parse(window.sessionStorage.getItem("userData"))[0].phone}<br />
      배송지: {JSON.parse(window.sessionStorage.getItem("userData"))[0].address2 + JSON.parse(window.sessionStorage.getItem("userData"))[0].address3}
      <h1>구매해주셔서 감사합니다.</h1>
    </div>
  )
}


export default PayResult;