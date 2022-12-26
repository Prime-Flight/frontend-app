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
import AdminDashboard from "./pages/AdminDashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BookDetailAdmin from "./components/BookDetailAdmin";
import store from "./redux/store";
import Booking from "./pages/Booking";
import BookingDetail from "./pages/BookingDetail";
import Protected from "./components/Protected";
import Payment from "./pages/Payment";
import PaymentProcess from "./pages/PaymentProcess";
import TicketPreview from "./pages/TicketPreview";
import "react-toastify/dist/ReactToastify.css";
import BookDetail from "./components/BookDetail";

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
              <Route
                path="/booking"
                element={
                  <Protected roles={[1, 2]}>
                    <Booking />
                  </Protected>
                }
              />
              <Route
                path="/bookingdetail"
                element={
                  <Protected roles={[1, 2]}>
                    <BookingDetail />
                  </Protected>
                }
              />
              <Route
                path="/payment"
                element={
                  <Protected roles={[1, 2]}>
                    <Payment />
                  </Protected>
                }
              />
              <Route
                path="/paymentprocess"
                element={
                  <Protected roles={[1, 2]}>
                    <PaymentProcess />
                  </Protected>
                }
              />
              <Route
                path="/ticket"
                element={
                  <Protected roles={[1, 2]}>
                    <TicketPreview />
                  </Protected>
                }
              />
              <Route path="/profile" element={<UserDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/bookdetailadmin/:id" element={<BookDetailAdmin />} />
              <Route path="/bookdetail/:id" element={<BookDetail/>} />
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
