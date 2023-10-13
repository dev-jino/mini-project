// import "./Header.css";
import styles from "./Header.module.css";
import logo from "../assets/images/logo-img.png";
import search_logo from "../assets/images/search-icon.png";
function Header() {
    return (
        <div className={styles.header}>
          <div className={styles.container}>
            <div className={styles.div}>
              <div className={styles.logo_icon}>
                <div className={styles.logo_text}>HowMuch</div>
                <img className={styles.logo_img} src={logo} />
              </div>
              <div className={styles.header_input}><img className={styles.img} src={search_logo} /></div>
              <div className={styles.main_menu}>
                <div className={styles.menu_item}><div className={styles.menu_item_txt}>장바구니</div></div>
                <div className={styles.menu_item}><div className={styles.menu_item_txt}>주문조회</div></div>
                <div className={styles.menu_item}><div className={styles.text_wrapper}>마이페이지</div></div>
                <div className={styles.menu_item}><div className={styles.menu_item_txt}>로그아웃</div></div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Header;
