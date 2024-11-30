import { Routes, Route } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import Doctors from "./../pages/Doctors/Doctors";
import SignUpPage from "./../pages/SignUpPage";
import LoginPage from "./../pages/LoginPage";
import ContactUs from "./../pages/ContactUs";
import AboutPage from "../pages/AboutPage";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRoutes from './ProtectedRoutes.jsx';
import DoctorDetails from "../pages/Doctors/DoctorDetails.jsx";
import Thankyou from "../pages/Thankyou.jsx";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/doctor" element={<Doctors />} />
      <Route path="/checkout-success" element={<Thankyou/>} />
      <Route path="/doctor/:id" element={<DoctorDetails />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/users/profile/me" element={<ProtectedRoutes allowedRoles={['patient']}><MyAccount /></ProtectedRoutes>} />
      <Route path="/doctors/profile/me" element={<ProtectedRoutes allowedRoles={['doctor']}><Dashboard /></ProtectedRoutes>} />
    </Routes>
  );
};

export default Router;
