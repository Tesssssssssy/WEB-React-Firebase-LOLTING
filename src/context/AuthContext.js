import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useReducer } from "react";
import { appAuth } from "../firebase/config";


// context 객체 생성.
const AuthContext = createContext();

// 앞에선 useState hook을 사용했는데 여기서 reducerState hook을 사용하는 이유는
// state hook은 단순한 형태의 데이터(문자형, 숫자형)을 다루는 데는 효과적이지만
// 객체형처럼 복잡한 데이터를 다루는 곳엔 적합하지 않음. (useState의 대체 함수)
const authReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, user: action.payload } 
            // 기존에 있던 유저 정보에 payload에서 새로 받아온 정보를 병합하기 위해서 전개구문 사용.
        case 'logout':
            return { ...state, user: null } 
        case 'isAuthReady':
            return { ...state, user: action.payload, isAuthReady: true }
        default:
            return state
    }
}




// context를 구독할 컴포넌트의 묶음 범위를 설정.
const AuthContextProvider = ({ children }) => {

    // dispatch는 Reducer 함수 호출 역할.
    // 전달하는 인자= action
    const [state, dispatch] = useReducer(authReducer, {
        user: null, 
        isAuthReady: false
    })

    // 컴포넌트가 업데이트될 때 실행되는 함수.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(appAuth, (user) => {
            dispatch({ type: 'isAuthReady', payload: user });
        });
        return unsubscribe
    }, [])

    console.log('user state: ', state);
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthContextProvider } 