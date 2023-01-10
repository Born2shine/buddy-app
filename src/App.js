import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Main from './pages/Dashboard/Main';
import Overview from "./pages/Dashboard/Overview";
import Message from './pages/Dashboard/Message';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/middleware/ProtectedRoute";
import { ResetPassword } from "./pages/Password/ResetPassword";
import { ComfirmResetPassword } from './pages/Password/ComfirmResetPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/forgot-password" element={<ResetPassword/>}/>
        <Route path="/comfirm-password-reset" element={<ComfirmResetPassword/>}/>
        <Route path="/account" element={<Main/>}>
          <Route element={<ProtectedRoute/>}>
            <Route path="overview" element={<Overview/>} />
            <Route path="messages" element={<Message/>} />
          </Route>
        </Route>
      </Routes>

      {/* flash message */}
      <ToastContainer theme="colored" />
    </div>
  );
}

export default App;
