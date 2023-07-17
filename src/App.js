import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidenav from "./Components/Sidenav";
import Explore from "./Pages/Explore";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Statistics from "./Pages/Statistics";
import Header from "./Header/header.js"
import Footer from "./Footer/footer.js"

function App() {
  return (
    <div className="App">
      
      <Header />
      <div class="middle">
        <div class="sidenav"><Sidenav /></div>
        <main class="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
