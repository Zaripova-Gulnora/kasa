import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import Error from "./pages/style/Error";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    
    <BrowserRouter>
    <Header />
    <main>
      <Routes>
	  <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Banner />} />
    <Route path="/logement/:id" element={<FicheLogement />} />
    <Route path="*" element={<Error />} />
      
        
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);