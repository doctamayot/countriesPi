import { Route, Routes } from "react-router-dom";
import { Landing } from "./components/landing/Landing.jsx";
import { Homepage } from "./components/homepage/Homepage.jsx";
import { Navbar } from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/homepage"
          element={
            <>
              <Navbar />
              <Homepage />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
