import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarApp from "./header/NavBarApp.jsx";
// import Cursos from "./Cursos"
import Footer from "./footer/Footer.jsx";
import AppMenu from "./MainMenu/components/menu.jsx";

function App() {
  return (
    <Router>
      <header>
        <NavbarApp />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<AppMenu />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;