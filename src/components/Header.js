// import "./Header.css";
import styles from "./Header.module.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Header() {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  }
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.div}>
          <div className={styles.logo_icon}>
            <div className={styles.logo_text}><Link to='/'>HowMuch</Link></div>
            
            <img className={styles.logo_img} src={logo} />
          </div>
          <div className={styles.header_input}><img className={styles.img} src={search_logo} />
          <form action='/search-result'>
              <input className={styles.search_inputbox} name="search-item" type="text" onChange={onChange} value={text} />
            </form>
          </div>
          <div className={styles.main_menu}>
            <div className={styles.menu_item}><div className={styles.menu_item_txt}><Link to='/cart'>장바구니</Link></div></div>
            <div className={styles.menu_item}><div className={styles.menu_item_txt}><Link to='/order-check'>주문조회</Link></div></div>
            <div className={styles.menu_item}><div className={styles.text_wrapper}><Link to='/mypage'>마이페이지</Link></div></div>
            <div className={styles.menu_item}><div className={styles.menu_item_txt}><Link to='/logout'>로그아웃</Link></div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
