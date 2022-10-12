import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/services" element={<h1>Servizi Page</h1>}/>
        <Route path="/products" element={<h1>Products page</h1>}/>
        <Route path="/sign-up" element={<h1>Sing-up Page</h1>}/>
      </Routes>
    </>
  );
}

export default App;
