import { useContext } from "react";
import { UseToken } from './components/CheckToken'
import {Header} from './components/Header/Header'

function App() {
  const context = useContext(UseToken)
  return (
    <div className="App">
      
      <Header token={context} />
    </div>
  );
}

export default App;
