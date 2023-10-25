import { Route, Routes } from "react-router-dom";
import {
  Landing,
  Homepage,
  Navbar,
  Detail,
  Formpage,
  Activities,
} from "./components";

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
        <Route path="/activities" element={<Activities />} />
      </Routes>
    </>
  );
}

export default App;
