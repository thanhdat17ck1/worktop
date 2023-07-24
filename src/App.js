import { useContext } from "react";
import { UseToken } from './components/CheckToken'
import {Header} from './components/Header/Header'
import Footer from "./components/Footer/Footer";

function App() {
  const context = useContext(UseToken)
  return (
    <div className="App">
      
      <Header token={context} />
      <Footer />
    </div>
  );
}

export default App;
