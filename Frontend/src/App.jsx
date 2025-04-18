import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import OrderPage from "./pages/OrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
import EventLandingPage from "./pages/EventLandingPage";
import WalletPage from "./pages/WalletPage";
import PostUsagePage from "./pages/PostUsagePage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/404Page";
/*import ProtectedRoute from "./components/ProtectedRoute"; */ // Ensure this doesn't include a Router
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EventBookingForm from "./components/EventBookingForm";

function App() {
  return (
   
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            {/* Protected Routes */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/order-history" element={<OrderHistoryPage />} />
            <Route path="/events" element={<EventLandingPage />} />
            <Route path="/event-booking/:eventType" element={<EventBookingForm />} />
            <Route path="/wallet" element={<WalletPage />} />
            <Route path="/feedback" element={<PostUsagePage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
   
  );
}

export default App;
