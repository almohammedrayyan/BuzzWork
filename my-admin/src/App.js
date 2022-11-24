import Login from "./login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Complaint from "./complaint/Complaint";
import Register from "./login/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} exact />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
