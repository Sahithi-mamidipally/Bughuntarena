import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/cards";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <Card className="shadow-lg">
            <CardContent>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <button
                    className="btn btn-danger w-100 py-3"
                    onClick={() => navigate("/challenges")}
                  >
                    Start Challenges
                  </button>
                </div>
                <div className="col-12 col-md-6">
                  <button
                    className="btn btn-outline-secondary w-100 py-3"
                    onClick={() => navigate("/challenges")}
                  >
                    Explore Learning Path
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;