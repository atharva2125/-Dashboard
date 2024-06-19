import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Navbar } from "./component/Navbar";
import "./index.css";

function App() {
  return (
  <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/About" element={<About />}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;