import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHomePage from "./layouts/HomePage/MainHomePage";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={MainHomePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
