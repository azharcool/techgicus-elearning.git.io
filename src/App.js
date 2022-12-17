import Login from "./pages/login";
import Signup from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forgot from "./pages/forgot";
import Home from "./pages/home";
// for navigation

// Authentication or Authorization
// Authentication -> without login you can't enter in your appilication.
// Protected Route or Private Route

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<div>langing route </div>} />
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
