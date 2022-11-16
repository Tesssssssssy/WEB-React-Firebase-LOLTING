import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin';
import styles from './Login.module.css'

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassWord] = useState('');
    const { error, isPending, login } = useLogin();

    const handleData = (event) => {
        if(event.target.type === 'email') {
            setEmail(event.target.value);
        }else if(event.target.type === 'password') {
            setPassWord(event.target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(email, password);
    }

    return (
       <form className={styles.login_form} onSubmit={handleSubmit}>
            <fieldset>
                <legend>로그인</legend>
                <label htmlFor='myEmail' >email: </label>
                <input type="email" id="myEmail" required value={email} 
                onChange={handleData}/>

                <label htmlFor='myPassWord'>password</label>
                <input type="password" id="myPassWord" required value={password}
                onChange={handleData} />

                {/* 로그인 버튼을 로그인 통신 상태에 따라 변경 */}
                {!isPending && <button type='submit' className={styles.btn}>로그인</button>}
                {isPending && <strong>로그인 중입니다...</strong>}
                {error && <strong>{error}</strong>}
            </fieldset>
       </form>  
    )
}