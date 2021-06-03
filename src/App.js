import Home from "./components/Home";
import ListTwo from "./components/ListTwo";
import PointsList from "./components/PointsList";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Home />
      <PointsList />
      <ListTwo />
    </div>
  );
}

export default App;
