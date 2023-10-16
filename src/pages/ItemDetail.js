import "./ItemDetail.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
import github_logo from "../assets/images/github-icon.png";
import GetItems from "../components/GetItems";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Header.module.css"
function ItemDetail() {
  const params = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3001/items?name=${params.item}`);
    xhr.setRequestHeader("content-type", "application-json");
    xhr.send(null);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        setItem(data);
        console.log(data)
      }
    }
  }, []);
  return (

    <div className="item-detail">
      <div className="wrapper">
            <Header />
            <div className="main">
              <div className="container-2">
                <div className="title"><div className="title-msg">상품 상세</div></div>
                <div className="row">
                  <div className="item-detail-left"><img className="item-detail-img" src={item.length && item[0].img}></img></div>
                  <div className="item-detail-right">
                    <div className="item-detail-name"><div className="item-detail-name-2">{item.length && item[0].name}</div></div>
                    <div className="item-detail-price"><div className="item-detail-price-2">{item.length && item[0].price}원</div></div>
                    <div className="item-detail-quantity">
                      <div className="number-input">
                        <div className="button"><img className="icon" src="img/image.svg" /></div>
                        <div className="input"><div className="value">{item.length && item[0].quantity}</div></div>
                        <div className="button"><img className="icon" src="img/icon.svg" /></div>
                      </div>
                    </div>
                    <div className="item-detail-hr"></div>
                    <div className="item-detail-button">
                      <div className="button-cart"><div className="text-wrapper-2">장바구니</div></div>
                      <div className="button-buy"><div className="text-wrapper-2">구매하기</div></div>
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
  )
}

export default ItemDetail;