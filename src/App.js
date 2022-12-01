import { Route, Routes } from "react-router-dom";
import Counter from "./Components/Counter";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
