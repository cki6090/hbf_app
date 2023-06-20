import './App.css';
import Header from "./components/index/header";
import Menu from "./components/index/menu";
import Contant from "./components/index/contant";
import Footer from "./components/index/footer"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <div className="App_index">

            <div className="Advertising">
              메인 이벤트 이미지
            </div>

            <div className="HBF_APP">
              <Header />
              <Menu />
              <Contant />
            </div>
          </div>
        </Route>

        <Route path="/search">검색</Route>

        <Route path="/event">이벤트</Route>

        <Route path="/my">나의 페이지</Route>
      </Switch>

      <Footer/>
    </Router>
   
  );
}

export default App;
