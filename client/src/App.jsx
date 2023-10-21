import { Route, Routes } from "react-router-dom";
import { Landing } from "./components/landing/Landing.jsx";
import { Homepage } from "./components/homepage/Homepage.jsx";
import { Navbar } from "./components/navbar/Navbar.jsx";
import { Detail } from "./components/detail/Detail.jsx";
import { Formpage } from "./components/formpage/Formpage.jsx";

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
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/activity" element={<Formpage />} />
      </Routes>
    </>
  );
}

export default App;
