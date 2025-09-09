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

// Receptionist Dashboard
import ReceptionistDashboard from "./pages/receptionistpages/receptionistdashboard";

// Labtechnician Dashboard
import LabtechnicialDashboard from "./pages/labtechnichains/technicians";

// Admin Dashboard
import AdminDashboard from "./pages/admin/admindashboard";

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

          {/*  */}
          <Route path="/receptionist" element={<ReceptionistDashboard />} />

          {/*  */}
          <Route path="/labtechnician" element={<LabtechnicialDashboard />} />

          {/*  */}
          <Route path="/admin" element={<AdminDashboard />} />
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
