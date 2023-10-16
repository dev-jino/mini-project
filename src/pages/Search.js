import "./Search.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
import github_logo from "../assets/images/github-icon.png";
import item_img from "../assets/images/home_item_img.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        {/* <Header /> */}
        <div className="main">
          <div className="container-2">
            <div className="title"><div className="title-msg">{item}에 대한 검색 결과</div></div>
            <div className="row">
              {filtered.map((f_item, index) => {
                console.log(f_item);
                return (
                  <ul key={index} className="home-item">
                    <li key={index}>
                      <Link to={`/item-detail/${f_item.name}`}><img className="home-item-img" src={f_item.img}></img></Link>
                      <div className="home-item-info">
                        <Link to={`/item-detail/${f_item.name}`}><div className="name">{f_item.name}</div></Link>
                        <Link to={`/item-detail/${f_item.name}`}><div className="price">{f_item.price}</div></Link>
                      </div>
                    </li>
                  </ul>
                )
              })}
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
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default Search;

