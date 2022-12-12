import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route index element={<Login/>}/> */}
        <Route index element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
