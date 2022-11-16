import { useState } from "react"
import { appAuth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    // 에러 정보 저장
    const [error, setError] = useState(null);
    // 현재 서버와 통신 상태를 저장.
    // false면 현재 통신하고 있지 않은 상태.
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = (email, password, displayName) => {
        setError(null); // 아직 에러 없음.
        setIsPending(true); // 통신 진행중.

        createUserWithEmailAndPassword(appAuth, email, password)
            .then ((userCredential) => {
                const user = userCredential.user;
                console.log(user);

                if(!user){
                    throw new Error('회원가입에 실패했습니다.');
                }

                updateProfile(appAuth.currentUser, { displayName })
                    .then(() => {
                        dispatch({ type: 'login', payload: user });
                        setError(null);
                        setIsPending(false);
                    }).catch((err) => {
                        setError(err.message);
                        setIsPending(false);
                    })

            }).catch((err) => {
                setError(err.message);
                setIsPending(false);
            })
    }
    return {error, isPending, signup}
}