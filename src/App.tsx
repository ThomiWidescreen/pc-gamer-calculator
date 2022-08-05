import InputContextProvider from "./context/InputContextProvider";
import GFInputs from "./components/GFInputs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GFResult from "./components/GFResult";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <InputContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GFInputs />} />
            <Route path="/result" element={<GFResult />} />
          </Routes>
        </BrowserRouter>
      </InputContextProvider>
    </>
  );
}

export default App;
