import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Banner from "./Components/Banner";

import Card from "./Components/Card";
import Blog from "./Components/Blog";
import Subscription from "./Components/Subscription";
import Footer from "./Components/Footer";
import Imformation from "./Components/Imformation";

import ProductListing from "./Pages/ProductListing";
import ProductDetail from "./Pages/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
      
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

      
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;