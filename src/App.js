import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ResetPswd from "./components/ResetPswd";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Link to="/">LoginPage</Link> */}
        {/* <Link to="/reset">Reset Password</Link> */}

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPswd />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
