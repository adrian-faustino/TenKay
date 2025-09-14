import Home from "./views/Home";
import Skills from "./views/Skills";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        {/* TODO: create app routes */}
      </main>
    </BrowserRouter>
  );
}

export default App;
