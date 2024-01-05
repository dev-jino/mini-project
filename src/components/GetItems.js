import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function GetItems() {
    const params = useParams();
    const [data, setData] = useState([]);   
    console.log(params);
    useEffect(() => {
        const xhr = new XMLHttpRequest();
        const X_NAVER_CLIENT_ID = `${process.env.REACT_APP_X_NAVER_CLIENT_ID}`;
        const X_NAVER_CLIENT_SECRET = `${process.env.REACT_APP_X_NAVER_CLIENT_SECRET}`;
        xhr.open("GET", `/v1/search/shop.json?display=10&query=${params.item}`);
        xhr.setRequestHeader("content-type", "application-json; charset=utf-8;");
        xhr.setRequestHeader("X-Naver-Client-Id", X_NAVER_CLIENT_ID);
        xhr.setRequestHeader("X-Naver-Client-Secret", X_NAVER_CLIENT_SECRET);
        
        xhr.send();

        xhr.onload = () => {
            if (xhr.status === 200) {
                const res = JSON.parse(xhr.response);
                console.log(res);
                // setData(res.items);
                setData(res.items.sort((a, b) => a.lprice - b.lprice));
            } else {
                console.log(xhr.status, xhr.statusText);
            }
            
        }
    }, [])
    return (
        <>
            
            {data.map((value, index) => {
                return (
                    <>
                        <div className="item-detail-lowprice-3">
                            <img className="item-detail-lowprice-4" src={value.image}></img>
                            <div className="item-detail-lowprice-5">
                                <div className="item-detail-name-wrapper"><div className="item-detail-name-2" dangerouslySetInnerHTML={{__html: value.title}}></div></div>
                                <div className="item-detail-price-wrapper"><div className="item-detail-price-2">{value.lprice}원</div></div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}
export default GetItems;
