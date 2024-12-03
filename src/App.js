import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Container } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Loading from "./components/Loading";
import Profile from "./views/Profile";
import ExternalApi from "./views/ExternalApi";
import Features from "./components/features";
import About from "./components/about";
import DetailChallange from "./components/detail-challenge"
import Dashboard from "./components/dashboard";
import Challenges from "./components/challenges";
import VulnerabilityChallenges from "./components/Vulnerability/vulnerabilitychallenges";
import Challenge1 from "./components/Vulnerability/challenge1";
import Resources from "./components/resource";
import CodeCompilerPage from "./views/CodeCompilerPage"; // Import the new CodeCompilerPage
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
            <Route path="/challenges">
              <Route
                index
                element={
                  isAuthenticated ? <Challenges /> : <Navigate to="/" replace />
                }
              />
              <Route
                path="detail/:id"
                element={
                  isAuthenticated ? <DetailChallange /> : <Navigate to="/" replace />
                }
              />
            </Route>
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
            <Route
              path="/vulnerability-challenges/1"
              element={
                isAuthenticated ? <Challenge1 /> : <Navigate to="/" replace />
              }
            />
            <Route
              path="/resources"
              element={
                isAuthenticated ? <Resources /> : <Navigate to="/" replace />
              }
            />
            {/* Add the new Code Compiler route */}
            <Route
              path="/code-compiler"
              element={
                isAuthenticated ? <CodeCompilerPage /> : <Navigate to="/" replace />
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;