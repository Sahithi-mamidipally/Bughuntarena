import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Updated imports
import { Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";
// Adjust the path if needed

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Loading from "./components/Loading";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import Features from "./components/features";
import About from "./components/about";
import Dashboard from "./components/dashboard";
import Challenges from "./components/challenges";
import VulnerabilityChallenges from "./components/Vulnerability/vulnerabilitychallenges";
import Challenge1 from "./components/Vulnerability/challenge1"; // Import Challenge 1
/*import ReactCodeEditorApp from "./components/Compiler/react-code-editor-app/src/App"; // Import React code editor app*/
import Resources from "./components/resource"; // Import Resources Page

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
            {/*<Route path="/challenges" element={<Challenges />} />*/}
            <Route
              path="/challenges"
              element={
                isAuthenticated ? <Challenges /> : <Navigate to="/" replace />
              }
            />
            {/* Protected route for Vulnerability Challenges */}
            <Route
              path="/vulnerability-challenges"
              element={
                isAuthenticated ? (
                  <VulnerabilityChallenges />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />

            {/* Redirect Challenge 1 directly to the code editor app */}
            {/*<Route
              path="/vulnerability-challenges/1"
              element={
                isAuthenticated ? (
                  <ReactCodeEditorApp />
                ) : (
                  <Navigate to="/" replace />
                )
              }
            />*/}

            {/* Add a nested route for Challenge 1 */}
            <Route
              path="/vulnerability-challenges/1"
              element={
                isAuthenticated ? <Challenge1 /> : <Navigate to="/" replace />
              }
            />

            {/* Resources Route */}
            <Route
              path="/resources"
              element={
                isAuthenticated ? <Resources /> : <Navigate to="/" replace />
              }
            />

            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
