import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Main from './pages/Dashboard/Main';
import Overview from "./pages/Dashboard/Overview";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Main/>}>
          <Route path="overview" element={<Overview/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
