import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Updated imports
import { Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
import Challenges from "./components/challenges"; // Adjust the path if needed

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Loading from "./components/Loading";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import Features from "./components/features";
import About from "./components/about";
import Dashboard from "./components/dashboard";

// styles
import "./App.css";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div id="app" className="d-flex flex-column h-100">
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Routes>
            {/* Define all your routes */}
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/external-api" element={<ExternalApi />} />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
              }
            />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
