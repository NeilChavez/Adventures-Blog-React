import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/products" element={<h1>Products page</h1>} />
        <Route path="/sign-up" element={<h1>Sing-up Page</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
