import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/cards";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Dashboard = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isPremium, setIsPremium] = useState(false);

  // Check premium status on component mount
  useEffect(() => {
    const checkPremiumStatus = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch("/api/check-premium", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        setIsPremium(data.isPremium);
      } catch (error) {
        console.error("Error checking premium status:", error);
      }
    };

    if (user) {
      checkPremiumStatus();
    }
  }, [user, getAccessTokenSilently]);

  const handlePremiumUpgrade = async () => {
    try {
      setLoading(true);
      const accessToken = await getAccessTokenSilently();
      
      // Create checkout session
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          userId: user.sub,
          email: user.email,
        }),
      });

      const session = await response.json();
      
      // Redirect to Stripe Checkout
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (error) {
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Check for success/canceled query params
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const success = queryParams.get('success');
    const canceled = queryParams.get('canceled');

    if (success) {
      // Payment was successful - could trigger a refresh of premium status
      alert('Payment successful! Your account will be upgraded shortly.');
    } else if (canceled) {
      // Payment was canceled
      alert('Payment canceled. You can try again whenever you\'re ready.');
    }
  }, []);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Welcome, {user?.name}!</CardTitle>
              {isPremium && (
                <span className="badge bg-success">Premium User</span>
              )}
            </CardHeader>
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
                {!isPremium && (
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      onClick={handlePremiumUpgrade}
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Upgrade to Premium ($50)"}
                    </button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;