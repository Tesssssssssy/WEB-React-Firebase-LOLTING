import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import styles from "./Nav.module.css";


export default function Nav() {
  const {logout} = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className={styles.nav}>
      <h1 className={styles.title}>LOLTING</h1>
      <ul className={styles.list_nav}>
      <li><Link to="/">홈</Link></li>
        {!user && 
            <>
              <li><Link to="/login">로그인</Link></li>
              <li><Link to="/signup">회원가입</Link></li>
              <li><Link to="/board">게시판</Link></li>
            </>
        }
        {user && 
          <>
            <strong>환영합니다!  {user.displayName}님</strong>
            <li><Link to="/board">게시판</Link></li>
            <li><button type='button' onClick={logout}>로그아웃</button></li>
          </>
        }



        
      </ul>
    </nav>
  );
}


