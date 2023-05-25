// import Footer from "./components/footer/Footer";
// import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/main/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
