import "./Search.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
import github_logo from "../assets/images/github-icon.png";
import item_img from "../assets/images/home_item_img.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function Search() {
    const [item, setItem] = useState("");
    const [itemLists, setItemLists] = useState([]);
    useEffect(() => {
      const query = window.location.search;
      const param = new URLSearchParams(query);
      setItem(param.get("search-item"));

      const xhr = new XMLHttpRequest();
      xhr.open("GET", "http://localhost:3001/items");
      xhr.setRequestHeader("content-type", "application-json");
      xhr.send();

      xhr.onload = () => {
        if (xhr.status === 200) {
          const items = JSON.parse(xhr.response);
          setItemLists(items);
        }
      }
    }, [])
    
    const filtered = itemLists.filter((itemList) => {
      return itemList.name.includes(item);
    })

    return (
        <div className="search">
      <div className="wrapper">
        <Header />
        {/* <div className="header">
          <div className="container">
            <div className="div">
              <div className="logo-icon">
                <div className="logo-text">HowMuch</div>
                <img className="logo-img" src={logo} />
              </div>
              <div className="header-input"><img className="img" src={search_logo} /></div>
              <div className="main-menu">
                <div className="menu-item"><div className="menu-item-txt">장바구니</div></div>
                <div className="menu-item"><div className="menu-item-txt">주문조회</div></div>
                <div className="menu-item"><div className="text-wrapper">마이페이지</div></div>
                <div className="menu-item"><div className="menu-item-txt">로그아웃</div></div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="main">
          <div className="container-2">
            <div className="title"><div className="title-msg">{item}에 대한 검색 결과</div></div>
            <div className="row">
              {filtered.map((f_item, index) => {
                console.log(f_item);
                return (
                  <ul key={index} className="home-item">
                    <li key={index}>
                      <img className="home-item-img" src={f_item.img}></img>
                      <div className="home-item-info">
                        {/* <Link to='/item-detail'><div className="name">{f_item.name}</div></Link> */}
                        <Link to={`/item-detail/${f_item.name}`}><div className="name">{f_item.name}</div></Link>
                        <div className="price">{f_item.price}</div>
                      </div>
                    </li>
                  </ul>
                )
              })}
              {/* <div className="home-item"> 
                <img className="home-item-img" src={item_img} />
                <div className="home-item-info">
                  <div className="name">나이키 1</div>
                  <div className="price">120,000원</div>
                </div>
              </div>
              <div className="home-item">
                <img className="home-item-img" src={item_img} />
                <div className="home-item-info">
                  <div className="name">나이키 1</div>
                  <div className="price">120,000원</div>
                </div>
              </div>
              <div className="home-item">
                <img className="home-item-img" src={item_img} />
                <div className="home-item-info">
                  <div className="name">나이키 1</div>
                  <div className="price">120,000원</div>
                </div>
              </div>
              <div className="home-item">
                <img className="home-item-img" src={item_img} />
                <div className="home-item-info">
                  <div className="name">나이키 1</div>
                  <div className="price">120,000원</div>
                </div>
              </div>
              <div className="home-item">
                <img className="home-item-img" src={item_img} />
                <div className="home-item-info">
                  <div className="name">나이키 1</div>
                  <div className="price">120,000원</div>
                </div>
              </div>
              <div className="home-item">
                <img className="home-item-img" src={item_img} />
                <div className="home-item-info">
                  <div className="name">나이키 1</div>
                  <div className="price">120,000원</div>
                </div>
              </div>
              <div className="home-item">
                <img className="home-item-img" src={item_img} />
                <div className="home-item-info">
                  <div className="name">나이키 1</div>
                  <div className="price">120,000원</div>
                </div>
              </div>
              <div className="home-item">
                <img className="home-item-img" src={item_img} />
                <div className="home-item-info">
                  <div className="name">나이키 1</div>
                  <div className="price">120,000원</div>
                </div>
              </div> */}
            </div>
            <div className="bottom">
              <div className="pagination">
                <div className="page"><img className="carat" src="img/carat-2.svg" /></div>
                <div className="page-active-wrapper">
                  <div className="page-active"><div className="num">1</div></div>
                </div>
                <div className="page-2"><div className="num-2">2</div></div>
                <div className="page-2"><div className="num-2">3</div></div>
                <div className="page-2"><div className="num-2">4</div></div>
                <div className="page-2"><div className="num-2">5</div></div>
                <div className="page-2"><img className="carat" src="img/carat.svg" /></div>
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
    </div>
    )
}

export default Search;

