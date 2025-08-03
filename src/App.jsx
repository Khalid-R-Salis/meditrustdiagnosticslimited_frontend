// Key import
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./index.css";

// FORMS Import
import Login from "./pages/authforms/login";
import ContactAdmin from "./pages/authforms/contactadmin";
import ResetPasswordEmail from "./pages/authforms/resetpwdemail";
import OTPInput from "./pages/authforms/otp";
import Newpassword from "./pages/authforms/newpassword";
import UpdatePWD from "./components/updatepwd";
import LogOut from "./components/logout";

// Receptionist Pages
import OverviewPage from "./pages/receptionistpages/overview/index.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactadmin" element={<ContactAdmin />} />
          <Route path="/emailreset" element={<ResetPasswordEmail />} />
          <Route path="/otp" element={<OTPInput />} />
          <Route path="/newpassword" element={<Newpassword />} />
          <Route path="/updatepassword" element={<UpdatePWD />} />
          {/* <Route path="/authforms/contactadmin" element={<ContactAdmin />} /> */}
          {/* the above route if for the main time before i have the consultations page */}

          {/*  */}
          <Route path="/receptionist/overview" element={<OverviewPage />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
