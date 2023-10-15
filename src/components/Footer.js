import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.row_wrapper}>
                <div className={styles.row_2}>
                    <div className={styles.col}>
                        <div className={styles.row_3}>
                            <div className={styles.logo_icon_2}>
                                <div className={styles.logo_text}>HowMuch</div>
                                <img className={styles.logo_img} src={logo} />
                            </div>
                            <p className={styles.footer_text}>현재 웹 사이트는 Mini-Project의 일환으로 실제로 물건을 판매하지 않습니다.</p>
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.row_3}>
                            <img className={styles.git_hub} src={github_logo} />
                            <p className={styles.p}>현재 웹사이트의 소스 코드는 하단의 Git Hub에서 확인하실 수 있습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
