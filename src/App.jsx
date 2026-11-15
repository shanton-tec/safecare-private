import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import Loading from "./pages/Loading";


function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  const [loading, setLoading] = useState(true);


 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
  };

  if (loading) {
  return <Loading />;
}
  return loggedIn ? (
    <Dashboard />
  ) : (
    <Login setLoggedIn={handleLogin} />
  );
}

export default App;