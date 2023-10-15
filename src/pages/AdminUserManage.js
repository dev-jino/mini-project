import "./AdminUserManage.css";
import logo from "../assets/images/logo-img.png";
import github_logo from "../assets/images/github-icon.png";
import search_logo from "../assets/images/search-icon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
function AdminUserManage() {
    return (
        <div class="admin-user-manage">
      <div class="wrapper">
        <Header />
        <div class="main">
          <div class="container-2">
            <div class="title"><div class="title-msg">관리자 회원관리</div></div>
            <div class="row">
              <div class="admin-user-table"></div>
              <div class="pagination">
                <div class="page"><img class="carat" src="img/carat.svg" /></div>
                <div class="page-active-wrapper">
                  <div class="page-active"><div class="num">1</div></div>
                </div>
                <div class="page-2"><div class="num-2">2</div></div>
                <div class="page-2"><div class="num-2">3</div></div>
                <div class="page-2"><div class="num-2">4</div></div>
                <div class="page-2"><div class="num-2">5</div></div>
                <div class="page-2"><img class="carat" src="img/image.svg" /></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        
      </div>
    </div>
    )
}

export default AdminUserManage;