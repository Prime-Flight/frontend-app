import Home from "./pages/Home";
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Journey from "./pages/Journey";
import Destination from "./pages/Destination";
import Order from "./pages/Order";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
              </Route>
              <Route path="/Journey" element={<Journey />} />
              <Route path="/Destination" element={<Destination />} />
              <Route path="/Order" element={<Order />} />
              <Route path="/profile" element={<UserDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="*" element={<h1>Page 404 Not Found</h1>} />
            </Routes>
            <ToastContainer theme="colored" position="top-right" />
          </BrowserRouter>
        </Provider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
