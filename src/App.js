import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/home/Home'
import Board from "./pages/board/Board"
import Login from "./pages/login/Login"
import Nav from "./components/Nav"
import Signup from "./pages/signup/Signup"
import { useAuthContext } from "./hooks/useAuthContext"


function App() {

  const { isAuthReady, user } = useAuthContext();

  return (
    <div className="App">
      { isAuthReady ? (
        <BrowserRouter router>
          <Nav></Nav>
          <Routes>
            {/* 로그인되었으면 홈으로, 아니면 로그인 화면으로 이동. */}
            <Route path='/' element={<Home />}></Route>
            <Route path='/login' element={!user ? <Login /> : <Navigate replace={true}
            to="/" />}></Route>
            <Route path='/board' element={user? <Board /> : <Navigate replace={true}
            to="/login" />}></Route>
          </Routes>
        </BrowserRouter>
      ): "loading..."}
    </div>
  );
}

export default App
