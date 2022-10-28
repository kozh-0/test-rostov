import AstroFacts from "./Components/AstroFacts";
import { Footer } from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";

export default function App() {


  return (
    <main>
      <div className="App">
        <Header />
        <Main/>
      </div>
      <AstroFacts/>
      <Footer/>
    </main>
  );
}

