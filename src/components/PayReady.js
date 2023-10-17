import { useState, useEffect } from "react";
import axios from "axios";
import pay_icon from "../assets/images/payment_icon_yellow_small.png";
import { Link } from "react-router-dom";

const name = window.sessionStorage.getItem("name")
const price = window.sessionStorage.getItem("price")
const quantity = window.sessionStorage.getItem("quantity")

const kpConfig = {
    next_redirect_pc_url: "",
    tid: "",
    params: {
        cid: "TC0ONETIME",
        partner_user_id: "partner_user_id",
        item_name: name,
        quantity: quantity,
        total_amount: quantity * price,
        vat_amount: 200,
        tax_free_amount: 0,
        approval_url: "http://localhost:3000/payresult",
        fail_url: "http://localhost:3000/",
        cancel_url: "http://localhost:3000/",
    },
}
function PayReady() {

    const [data, setData] = useState({});
    const { params } = kpConfig;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `http://localhost:3001/items/`)
    useEffect(() => {
        const postKakaoPay = async () => {
            const data = await axios.post("https://kapi.kakao.com/v1/payment/ready", null, {
                params,
                headers: {
                    Authorization: "KakaoAK ae3ef7e66d1721cd8c214020d71aa988",
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
                    "Accept": "application/json; charset=utf-8",
                }
            })
                .then((response) => {
                    const {
                        data: { next_redirect_pc_url, tid }
                    } = response;
                    window.localStorage.setItem("tid", tid);
                    setData({ next_redirect_pc_url, tid });
                    console.log(response);
                    console.log(next_redirect_pc_url, tid)
                });
        }
        postKakaoPay();
    }, [])

    const pay = () => {
        window.location.href = data.next_redirect_pc_url;
        console.log(window.location.href)
    }
    console.log(name, quantity, price);
    return (
        <button className="button-buy" onClick={pay}>
            <Link to={data.next_redirect_pc_url} />
            <img src={pay_icon}></img>
        </button>

    )
}

export default PayReady;
