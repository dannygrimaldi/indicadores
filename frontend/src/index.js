import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDash from "./App";
import Estadisticas from "./Estadisticas";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDash />} />
        <Route path="/Estadisticas" element={<Estadisticas />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
