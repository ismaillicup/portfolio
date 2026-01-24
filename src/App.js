import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ICTClub from "./pages/ICTClub";
import PTM from "./pages/PTM";
import Reflection from "./pages/Reflection";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ict-club" element={<ICTClub />} />
        <Route path="/ptm" element={<PTM />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
