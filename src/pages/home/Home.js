import styles from "./Home.module.css";
// import { FirebaseStorage } from "firebase/storage";
// import { getDownloadURL } from "firebase/storage";
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.posts}>
        <div className={styles.image}>
          <img className={styles.lolting_img} alt="lolting" src="image/lolting_main.png" />
            <div className={styles.contents}>
              <p>
                롤팅은 <span className={styles.blue}>한국항공대학교 소프트웨어학과</span> 산학프로젝트2 과목의 <br />
                OB팀의 프로젝트 주제로 선정되어 <br />
                2022. 09 ~ 2022. 12 약 3개월 간 진행되었습니다. <br />

                <br/>
                롤팅은 <span className={styles.green}>안드로이드</span>를 기반으로 하고 있으며 <br />
                국내 인기 게임인 리그 오브 레전드를 함께 할 이성 친구를 <br />
                매칭해주는 일종의 소개팅 애플리케이션입니다. <br />

                <br />
                애플리케이션에서 이미 회원가입을 했다면 <br />
                해당 계정으로 로그인할 수 있습니다.
                <br />

                <br/>
                롤팅의 자세한 이용법은 애플리케이션 메인 화면의 <br />
                <span className={styles.red}>TUTORIAL</span>에 상세히 나와있습니다. <br />
                꼭 참고해주세요!
              </p>
            </div>
        </div>
        <div className={styles.image}>
            <Link to="./download/download.html">
              <button className={styles.download_btn}>Download LOLTING</button>
            </Link>
            <div className={styles.contents}>
              <p className={styles.download}>
                &lt;-  롤팅 다운로드 클릭! <br />
              </p>
            </div>
        </div>
        <div>
          <h3 className={styles.name}>
            OB developers: 변동환, 정채윤, 임태우, 김현석, 신현수
          </h3>
        </div>
      </div>
    </div>
  )
}
