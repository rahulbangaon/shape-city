// importing from libraries

import { BrowserRouter, Routes, Route } from "react-router-dom";

// importing pages

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Gallery from "./pages/gallery/Gallery";
import Memberships from "./pages/memberships/Memberships";
import Trainers from "./pages/trainers/Trainers";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";

// importing components

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./helpers/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
