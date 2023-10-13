import "./ItemDetail.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
import github_logo from "../assets/images/github-icon.png";
import GetItems from "../components/GetItems";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
      }
    }
  }, []);
  return (
    <div className="item-detail">
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="div">
              <div className="logo-icon">
                <div className="logo-text">HowMuch</div>
                <img className="logo-img" src={logo} />
              </div>
              <div className="header-input"><img className="search-icon" src={search_logo} /></div>
              <div className="main-menu">
                <div className="menu-item"><div className="menu-item-txt">장바구니</div></div>
                <div className="menu-item"><div className="menu-item-txt">주문조회</div></div>
                <div className="menu-item"><div className="text-wrapper">마이페이지</div></div>
                <div className="menu-item"><div className="menu-item-txt">로그아웃</div></div>
              </div>
            </div>
          </div>
        </div>
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
                {/* <div className="item-detail-lowprice-3"> */}
                {/* <GetItems props={params.item} /> */}
                <GetItems key={item.length}/>
                {/* <div className="item-detail-lowprice-4"></div>
                  <div className="item-detail-lowprice-5">
                    <div className="item-detail-name-wrapper"><div className="item-detail-name-2">나이키2</div></div>
                    <div className="item-detail-price-wrapper"><div className="item-detail-price-2">210,000원</div></div>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="row-wrapper">
          <div className="row-2">
            <div className="col">
              <div className="row-3">
                <div className="logo-icon-2">
                  <div className="logo-text">HowMuch</div>
                  <img className="logo-img" src={logo} />
                </div>
                <p className="footer-text">현재 웹 사이트는 Mini-Project의 일환으로 실제로 물건을 판매하지 않습니다.</p>
              </div>
            </div>
            <div className="col">
              <div className="row-3">
                <img className="git-hub" src={github_logo} />
                <p className="p">현재 웹사이트의 소스 코드는 하단의 Git Hub에서 확인하실 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ItemDetail;