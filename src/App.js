import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import ForgotPassword from "./pages/Auth/ForgotPassword/Index";
import SignIn from "./pages/Auth/SignIn/Index";
import SignUp from "./pages/Auth/SignUp/Index";
import Home from "./pages/Home/Index";
import { Offers } from "./pages/Offers/Index";
import Profile from "./pages/Profile";


function App() {
  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
        </Routes>
       </Router>
    </>
  );
}

export default App;
