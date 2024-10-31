import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Landing from "./pages/Landing";
import Subscriptions from "./pages/Subscriptions";
import Location from "./pages/Location";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Account from "./pages/Account";
import { GlobalStateProvider } from "./GlobalState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStateProvider>
        <Router>
          {/* toast notifications */}
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/location" element={<Location />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </GlobalStateProvider>
    </>
  );
}

export default App;
