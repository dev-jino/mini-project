import "./Home.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderMenu from "../components/HeaderMenu";

function Home() {
    const [text, setText] = useState("");
    const onChange = (e) => {
        setText(e.target.value);
    }
    const [itemLists, setItemLists] = useState([]);
    useEffect(() => {
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

    return (
        <div class="home">
            <div class="wrapper">
                <div class="home-header-wrap">
                    <div class="container">
                        <div class="home-header">
                            <div class="logo-icon">
                                <Link to='/'><div class="logo-text">HowMuch</div>
                                <img class="logo-img" src={logo} alt="로고" /></Link>
                            </div>
                            <HeaderMenu />
                        </div>
                        <div class="cta">
                            <div class="home-search">
                                <div class="home-search-text">원하는 상품을 검색해보세요</div>
                                <div class="home-search-input">
                                    <img class="home-search-img" src={search_logo} alt="검색" />
                                    <form action='/search-result'>
                                        <input class="home-search-inputbox" name="search-item" type="text" onChange={onChange} value={text} />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="home-items-section">
                    <div class="div">
                        <div class="title"><div class="title-msg">이런 상품 어때요?</div></div>
                        <div class="row">
                            {itemLists.sort(() => Math.random() - 0.5).slice(0, 4).map((item, index) => {
                                console.log(itemLists, item);
                                return (
                                    <ul key={index} className="home-item">
                                        <li key={index}>
                                            <Link to={`/item-detail/${item.name}`} onClick={() => {
                                                window.sessionStorage.setItem("name", item.name)
                                                window.sessionStorage.setItem("price", item.price)
                                                window.sessionStorage.setItem("quantity", 1)}}><img className="home-item-img" src={item.img}></img></Link>
                                            <div className="home-item-info">
                                                <Link to={`/item-detail/${item.name}`} onClick={() => {
                                                window.sessionStorage.setItem("name", item.name)
                                                window.sessionStorage.setItem("price", item.price)
                                                window.sessionStorage.setItem("quantity", item.quantity)}}><div className="name">{item.name}</div></Link>
                                                <Link to={`/item-detail/${item.name}`} onClick={() => {
                                                window.sessionStorage.setItem("name", item.name)
                                                window.sessionStorage.setItem("price", item.price)
                                                window.sessionStorage.setItem("quantity", 1)}}><div className="price">{item.price}</div></Link>
                                            </div>  
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;