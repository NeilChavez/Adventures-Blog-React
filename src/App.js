import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/pages/HomePage";
import Footer from "./components/Footer";
import CityPage from "./components/pages/CityPage";
import { useState } from "react";

function App() {
  const [lastScrollY, setLastScroll] = useState(0);

  return (
    <>
      <Navbar
        setLastScroll={setLastScroll}
      />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/city/*">
          <Route
            path=":city"
            element={
              <CityPage
                lastScrollY={lastScrollY}
                setLastScroll={setLastScroll}
              />
            }
          />
        </Route>
        <Route path="/products" element={<h1>Products page</h1>} />
        <Route path="/sign-up" element={<h1>Sing-up Page</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
