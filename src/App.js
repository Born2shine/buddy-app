import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Main from './pages/Dashboard/Main';
import Overview from "./pages/Dashboard/Overview";
import Message from './pages/Dashboard/Message';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/account" element={<Main/>}>
          <Route path="overview" element={<Overview/>} />
          <Route path="messages" element={<Message/>} />
        </Route>
      </Routes>

      {/* flash message */}
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
