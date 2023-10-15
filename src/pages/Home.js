import "./Home.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
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
                            <div class="main-menu">
                                <div class="menu-item"><div class="menu-item-txt"><Link to='/cart'>장바구니</Link></div></div>
                                <div class="menu-item"><div class="menu-item-txt"><Link to='order-check'>주문조회</Link></div></div>
                                <div class="menu-item"><div class="text-wrapper"><Link to='mypage'>마이페이지</Link></div></div>
                                <div class="menu-item"><div class="menu-item-txt"><Link to='logout'>로그아웃</Link></div></div>
                            </div>
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
                            {itemLists.map((item, index) => {
                                console.log(item);
                                return (
                                    <ul key={index} className="home-item">
                                        <li key={index}>
                                            <Link to={`/item-detail/${item.name}`}><img className="home-item-img" src={item.img}></img></Link>
                                            <div className="home-item-info">
                                                <Link to={`/item-detail/${item.name}`}><div className="name">{item.name}</div></Link>
                                                <Link to={`/item-detail/${item.name}`}><div className="price">{item.price}</div></Link>
                                            </div>
                                        </li>
                                    </ul>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer />
                {/* <footer class="footer">
                    <div class="row-wrapper">
                        <div class="row-2">
                            <div class="col">
                                <div class="row-3">
                                    <div class="logo-icon-2">
                                        <div class="logo-text">HowMuch</div>
                                        <img class="logo-img" src={logo} alt="로고" />
                                    </div>
                                    <p class="footer-text">현재 웹 사이트는 Mini-Project의 일환으로 실제로 물건을 판매하지 않습니다.</p>
                                </div>
                            </div>
                            <div class="col">
                                <div class="row-3">
                                    <img class="git-hub" src={github_logo} />
                                    <p class="p">현재 웹사이트의 소스 코드는 하단의 Git Hub에서 확인하실 수 있습니다.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer> */}
            </div>
        </div>
    )
}

export default Home;