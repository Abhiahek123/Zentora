import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Contactus from "./components/Contactus";
import Aboutus from "./components/Aboutus";

// Admin Components
import AdminDashboard from "./components/admin/AdminDashbord";
import AdminProjects from "./components/admin/AdminProjects";
import AdminUsers from "./components/admin/AdminUsers";
import AdminClient from "./components/admin/AdminClient";
import AdminBids from "./components/admin/AdminBids";
import AdminProfile from "./components/admin/AdminProfile";
import AdminPlans from "./components/admin/AdminPlans";

// Client Components
import ClientDashboard from "./components/client/ClientDashboard";
import ClientPostProject from "./components/client/ClientPostProject";
import ClientManageProjects from "./components/client/ClientManageProjects";
import ClientReviewBids from "./components/client/ClientReviewBids";
import ClientProfile from "./components/client/ClientProfile";

// User Components
import UserDashboard from "./components/user/UserDashboard";
import UserProjects from "./components/user/UserProjects";
import UserBids from "./components/user/UserBids";
import UserProfile from "./components/user/UserProfile";
import UserPlans from "./components/user/UserPlans";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Common Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/about-us" element={<Aboutus />} />

        {/* Admin Routes */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-projects" element={<AdminProjects />} />
        <Route path="/admin-users" element={<AdminUsers />} />
        <Route path="/admin-client" element={<AdminClient />} />
        <Route path="/admin-bids" element={<AdminBids />} />
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/admin-plans" element={<AdminPlans />} />

        {/* Client Routes */}
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/client-post-project" element={<ClientPostProject />} />
        <Route path="/client-manage-projects" element={<ClientManageProjects />} />
        <Route path="/client-review-bids" element={<ClientReviewBids />} />
        <Route path="/client-profile" element={<ClientProfile />} />

        {/* User Routes */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/user-projects" element={<UserProjects />} />
        <Route path="/user-bids" element={<UserBids />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/user-plans" element={<UserPlans />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;