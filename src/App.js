import { LeftMenu } from './components/LeftMenu'
import { MainContainer } from "./components/MainContainer";
import { RightMenu } from "./components/RightMenu";
import "./App.css"

function App() {
  return (
    <div className="App">
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
}

export default App;
