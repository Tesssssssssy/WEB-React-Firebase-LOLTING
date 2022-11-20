import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import styles from "./Nav.module.css";


export default function Nav() {
  const {logout} = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.nav}>
        <img className={styles.logo} src="/image/icon.png" alt="lolting_logo" />
      <ul className={styles.list_nav}>
      <li><Link to="/">Home</Link></li>
        {!user && 
            <>
              <li><Link to="/login">로그인</Link></li>
              <li><Link to="/board">다운로드</Link></li>
            </>
        }
        {user && 
          <>
            <strong>환영합니다!  {user.displayName}님</strong>
            <li><Link to="/board">다운로드</Link></li>
            <li><button type='button' onClick={logout}>로그아웃</button></li>
          </>
        }



        
      </ul>
    </nav>
  );
}


