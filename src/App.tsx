import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";

import Main from "./Components/Main";
import {About} from "./pages/About";
import {Contacts} from "./pages/Contacts";
import {Guarantees} from "./pages/Guarantees";
import {Schedule} from "./pages/Schedule";
import Tech from "./pages/Tech";

export default function App() {


  return (
    <main>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/guarantees" element={<Guarantees />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

