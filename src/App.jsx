import { lazy } from "react";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Home from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
const Doctors = lazy(() => import("./pages/Doctors"));
import SingleDoctor from "./pages/SingleDoctor";
import Offers from "./pages/Offers";
import SingleOffer from "./pages/SingleOffer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Services from "./pages/services/Services";
import ServicePosts from "./pages/services/ServicePosts";
import Reserve from "./pages/Reserve";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id/:subid" element={<ServicePosts />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<SingleDoctor />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers/:id" element={<SingleOffer />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
