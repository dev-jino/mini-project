import "./Search.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
import github_logo from "../assets/images/github-icon.png";
import item_img from "../assets/images/home_item_img.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

import Pagination from "react-js-pagination";

function Search() {

  const [item, setItem] = useState("");
  const [itemLists, setItemLists] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPost, setCurrentPost] = useState(itemLists);

  const postPerPage = 8;
  const indexOfLastPost = page * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
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

  const handlePageChange = (page) => {
    setPage(page);
  }
  const filtered = itemLists.filter((itemList) => {
    return itemList.name.includes(item);
  })
  useEffect(() => {
    setCurrentPost(filtered.slice((page - 1) * postPerPage, page * postPerPage))
  }, [itemLists, page])



  return (
    <div className="search">
      <div className="wrapper">
        <div className="main">
          <div className="container-2">
            <div className="title"><div className="title-msg">{item}에 대한 검색 결과</div></div>
            <div className="row">
              {currentPost.map((f_item, index) => {
                console.log(f_item)
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
              {/*activePage: 현재 페이지, itemsCountPerPage: 한 페이지당 보여줄 리스트 아이템의 개수,
                totalItemsCount: 총 아이템 개수, pageRangeDisplayed: Paginator 내에서 보여줄 페이지의 범위,
                prevPageText: "이전"을 나타낼 텍스트, nextPageText: "다음"을 나타낼 텍스트,
                onChange: 페이지가 바뀔 때 핸들링 할 함수 */}
              <Pagination
                activePage={page}
                itemsCountPerPage={postPerPage}
                totalItemsCount={filtered.length}
                pageRangeDisplayed={5}
                prevPageText={"<"}
                nextPageText={">"}
                onChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search;

