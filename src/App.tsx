import Home from "./views/Home";
import Skills from "./views/Skills";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./views/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          {/* TODO ADD TO NAVBAR */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* TODO: create app routes */}
      </main>
    </BrowserRouter>
  );
}

export default App;
