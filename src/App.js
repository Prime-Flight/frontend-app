import Home from "./pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Journey from "./pages/Journey";
import Destination from "./pages/Destination";
import Order from "./pages/Order";
import UserDashboard from "./pages/UserDashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/Journey" element={<Journey />} />
          <Route path="/Destination" element={<Destination />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/profile" element={<UserDashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="*" element={<h1>Page 404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
