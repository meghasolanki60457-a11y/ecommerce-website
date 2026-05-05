import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Blog from "./Components/Blog";
import Subscription from "./Components/Subscription";
import Imformation from "./Components/Imformation";

import ProductListing from "./Pages/ProductListing";
import ProductDetail from "./Pages/ProductDetail";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Imformation />
              <Card />
              <Blog />
              <Subscription />
            </>
          }
        />

        {/* Products */}
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* 🔐 Protected Dashboard */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;