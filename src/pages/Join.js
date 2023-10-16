import "./Join.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { IsLoginContext } from '../contexts/IsLoginContext';
import Post from "../components/Post";

function Join() {
    const { state } = useLocation();
    const { setIsLogin } = useContext(IsLoginContext);
    const navigate = useNavigate();
    const [addressObj, setAddressObj] = useState({
      zonecode : '',
      fullAddress : ''
    });
  
    console.log("state : ", state);
  
    const [userInfo, setUserInfo] = useState({
      id: 0,
      userid: `${ state.id }`,
      nickname: `${ state.nickname }`,
      email: "",
      phone: "",
      address1: "",
      address2: "",
      address3: "",
      status: 1
    });
  
    useEffect(() => {
      console.log(addressObj);
      setUserInfo({
        ...userInfo, 
        address1: addressObj.zonecode,
        address2: addressObj.fullAddress
      })
    }, [addressObj]);
  
    console.log("userInfo : ", userInfo);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`submit! :`, userInfo);
  
      const xhr = new XMLHttpRequest();
  
      const data = JSON.stringify(userInfo);
  
      xhr.open("POST", "http://localhost:3001/user");
      xhr.setRequestHeader("content-type", "application/json");
      xhr.send(data);
  
      xhr.onload = () => {
        if (xhr.status === 201) {
          const post = JSON.parse(xhr.responseText);
          console.log(post);
  
          sessionStorage.setItem("userData", JSON.stringify(post));
          setIsLogin(true);
  
          alert(`${post.nickname}님의 가입을 축하합니다.`);
          navigate('/');
        } else {
          console.log(xhr.status, xhr.statusText);
        }
      };
    };

    return (
      <div class="join">
        <div class="wrapper">
          <div class="main">
            <div class="container-2">
              <div class="title">
                <div class="title-msg">회원가입</div>
              </div>
              <div class="row">
                <div class="col">
                  <form onSubmit={handleSubmit}>
                  <input
                    className="join-input"
                    value={ state.id }
                    readOnly
                    style={{ display: "none" }}
                    required
                  ></input>
                  <div className="join-info">
                    <div className="join-text">이름 </div>
                    <div className="join-error-wrap">
                      <div
                        className="join-error-2"
                        style={{ visibility: "hidden" }}
                      >
                        필수 입력 항목입니다.
                      </div>
                    </div>
                    <input
                      className="join-input"
                      value={ state.nickname }
                      onChange={(e) =>
                        setUserInfo((prevState) => {
                          return { ...prevState, nickname: e.target.value };
                        })
                      }
                      required
                    ></input>
                  </div>
                  <div className="join-info">
                    <div className="join-text">이메일</div>
                    <div className="join-error-wrap">
                      <div
                        className="join-error"
                        style={{ visibility: "hidden" }}
                      >
                        이메일 형식이 아닙니다.
                      </div>
                      <div
                        className="join-error-2"
                        style={{ visibility: "hidden" }}
                      >
                        필수 입력 항목입니다.
                      </div>
                    </div>
                    <input
                      className="join-input"
                      value={ state.email }
                      onChange={(e) =>
                        setUserInfo((prevState) => {
                          return { ...prevState, email: e.target.value };
                        })
                      }
                      required
                    ></input>
                  </div>
                  <div className="join-info">
                    <div className="join-text">전화번호</div>
                    <div className="join-error-wrap">
                      <div
                        className="join-error-2"
                        style={{ visibility: "hidden" }}
                      >
                        필수 입력 항목입니다.
                      </div>
                    </div>
                    <input
                      className="join-input"
                      onChange={(e) =>
                        setUserInfo((prevState) => {
                          return { ...prevState, phone: e.target.value };
                        })
                      }
                      required
                    ></input>
                  </div>
                  <div className="join-info-2">
                    <div className="join-text">주소</div>
                    <div className="join-error-wrap">
                      <div
                        className="join-error-3"
                        style={{ visibility: "hidden" }}
                      >
                        필수 입력 항목입니다.
                      </div>
                    </div>
                    <input
                      className="join-input-2"
                      value={addressObj.zonecode}
                      readOnly
                      required
                    ></input>
                      <Post setAddressObj={setAddressObj}/>
                    <input
                      className="join-input"
                      value={addressObj.fullAddress}
                      readOnly
                      required
                    ></input>
                    <input className="join-input" onChange={(e) =>
                        setUserInfo((prevState) => {
                          return { ...prevState, address3: e.target.value };
                        })
                      }></input>
                  </div>
                  <div className="join-button">
                    <button type="submit" className="button-confirm">
                      가입하기
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Join;