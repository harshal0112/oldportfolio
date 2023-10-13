import "./App.css";
import { useState } from "react";
import Navbar from "./Navbar";
import NavbarBottom from "./NavbarBottom";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Work from "./Work";
import Contact from "./Contact";

function App() {
  const [mode, setMode] = useState("");
  return (
    <>
      <div className="font-[Roboto]">
        <Navbar mode={mode} setMode={setMode} />

        <main className="main h-[100vh] w-Full snap-y snap-mandatory overflow-y-auto">
          <Home />
          <About />
          <Skills />
          <Education />
          <Work />
          <Contact />
        </main>
        <NavbarBottom />
      </div>
    </>
  );
}

export default App;
