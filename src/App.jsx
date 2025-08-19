import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import Footer from "../src/Components/footer/Footer.jsx";
import WebService from "./Pages/Service/webservice/WebService.jsx";
import AppService from "./Pages/Service/AppService/AppService.jsx";
import Digital from "./Pages/Service/Digital/Digital.jsx";
import DataScience from "./Pages/Service/DataScience/DataScience.jsx";
import Ai from './Pages/Service/ArtificialIntelligence/AI.jsx';
import Software from './Pages/Service/Software/Software.jsx';
import NotFound from "./Pages/NotFound.jsx";
import AboutUsPage from "./Pages/Aboutus/AboutUsPage.jsx";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage.jsx";
import ScrollToTop from "./Components/ScrollBar/ScrollToTop.jsx";
import Termsconditions from "./Pages/Terms&Conditiions/Terms&conditions.jsx";
import Privacyrefund from "./Pages/policy&refund/Privacyrefund.jsx";


function App() {
  const location = useLocation();

  // List of valid routes (update to match your real paths)
  const validRoutes = [
    "/", "/services/Web-development", "/services/App-development", "/services/Digital-marketing",
    "/services/Data-science", "/services/Software-development", "/services/Artificial-intelligence",
    "/services/seo", "/contact-us", "/about-us","/terms&conditions","/privacy&refund"
  ];

  const isNotFound = !validRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      {!isNotFound && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/Web-development" element={<WebService />} />
        <Route path="/services/App-development" element={<AppService />} />
        <Route path="/services/Digital-marketing" element={<Digital />} />
        <Route path="/services/Data-science" element={<DataScience />} />
        <Route path="/services/Software-development" element={<Software />} />
        <Route path="/Services/Artificial-intelligence" element={<Ai />} />
        <Route path="/services/seo" element={<Digital />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/terms&conditions" element={<Termsconditions />} />
        <Route path="/privacy&refund" element={<Privacyrefund />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
