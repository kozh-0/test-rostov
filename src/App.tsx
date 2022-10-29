import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";

import Main from "./Components/Main";
import {About} from "./pages/About";
import {Contacts} from "./pages/Contacts";
import {Guarantees} from "./pages/Guarantees";
import { NotFound } from "./pages/NotFound";
import {Schedule} from "./pages/Schedule";
import Tech from "./pages/Tech";

export default function App() {


  return (
    <main>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/test-rostov" element={<Main />} />
          <Route path="/test-rostov/tech" element={<Tech />} />
          <Route path="/test-rostov/schedule" element={<Schedule />} />
          <Route path="/test-rostov/guarantees" element={<Guarantees />} />
          <Route path="/test-rostov/about" element={<About />} />
          <Route path="/test-rostov/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

