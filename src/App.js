import "./assets/style/app.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
}

export default App;
