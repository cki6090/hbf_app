import './App.css';


import Contant from "./components/index/contant";
import Footer from "./components/index/footer";
import Advertising from './components/pages/Advertising';

function App() {
  return (
      <div className="App_index">

        <Advertising/>
        
        <div className="HBF_APP">
          
          <Contant/>
          <Footer />
        </div>

      </div>
  );
}

export default App;
