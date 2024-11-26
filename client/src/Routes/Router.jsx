import { Routes, Route } from "react-router-dom";
import HomePage from "./../pages/HomePage";
import Doctors from "./../pages/Doctors/Doctors";
import DoctorDetails from "./../pages/Doctors/DoctorDetails";
import SignUpPage from "./../pages/SignUpPage";
import LoginPage from "./../pages/LoginPage";
import ContactUs from "./../pages/ContactUs";
import AboutPage from "../pages/AboutPage";
import MyAccount from "../Dashboard/user-account/MyAccount";
import Dashboard from "../Dashboard/doctor-account/Dashboard";
import ProtectedRoutes from './ProtectedRoutes';


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/user/profile/me" element={<ProtectedRoutes allowedRoles={['patient']}><MyAccount /></ProtectedRoutes>} />
      <Route path="/doctor/profile/me" element={<ProtectedRoutes allowedRoles={['doctor']}><Dashboard /></ProtectedRoutes>} />
    </Routes>
  );
};

export default Router;
