import { createContext, useContext, useMemo, useState } from "react";


const userData = JSON.parse(sessionStorage.getItem("userData"));
const accessToken = sessionStorage.getItem("access_token");

// createContext
export const IsLoginContext = createContext({
    isLogin : userData !== null && accessToken !== null ? true : false
});

// Provider
export function IsLoginProvider({children}) {
    const [isLogin, setIsLogin] = useState(
        userData !== null && accessToken !== null ? true : false
    );

    // useMemo : 이전에 계산한 값을 메모리에 저장 -> 동일한 계산의 반복 수행을 제거
    // '렌더링 => 컴포넌트 함수 호출 => 모든 내부 변수 초기화'의 과정을
    // '렌더링 => 컴포넌트 함수 호출 => memoize된 함수 재사용'으로 진행
    const value = useMemo(() => (
        {isLogin, setIsLogin}
    ), [isLogin, setIsLogin]);

    return (
        <>
        <IsLoginContext.Provider value={value}>
            {children}
        </IsLoginContext.Provider>
        </>
    );
}

// Custom Hook
/*  ContextAPI에서 전달하는 값을 사용하는 하위 컴포넌트들에서는 
    매번 useContext를 import해서 인자로 React.createContext() 객체를 인자로 넣어서 
    값을 호출해서 사용하였는데 이 부분은 별도의 custom Hook으로 정의해서 사용 */
// 함수의 이름에 접두사 use 사용
export function useIsLoginState() {
    const context = useContext(IsLoginContext);

    if (!context) {
        throw new Error('Cannot find IsLoginProvider');
    }

    return context.isLogin;
}


