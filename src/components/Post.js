import React, { useEffect, useState } from "react";
import { useDaumPostcodePopup } from "react-daum-postcode";
import { postcodeScriptUrl } from "react-daum-postcode/lib/loadPostcode";

const Post = (props) => {
    const open = useDaumPostcodePopup(postcodeScriptUrl);

    const handleComplete = (data) => {
        let fullAddress = data.roadAddress;
        let extraAddress = ''; //추가될 주소

        // if (data.addressType === 'R') { //주소타입이 도로명주소일 경우
          if (data.bname !== '') {
            extraAddress += data.bname; //법정동, 법정리
          }
          if (data.buildingName !== '') { //건물명
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }

          props.setAddressObj({
            zonecode : data.zonecode,
            fullAddress : fullAddress += `(${extraAddress})`
          });

          console.log(`${fullAddress}`)
        // }
      }

    const handleClick = () => {
        //주소검색이 완료되고, 결과 주소를 클릭 시 해당 함수 수행
          open({onComplete: handleComplete});
      }
    
    return (
        <button className="button-find-zipcode" type="button" onClick={handleClick}>주소찾기</button>
    );
};

export default Post;