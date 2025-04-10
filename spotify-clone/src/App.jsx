import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Opening from "./components/Opening";

function App() {
  const [showOpening, setShowOpening] = useState(true);

  useEffect(() => {
    // Set a timeout to hide Opening screen after 3 seconds
    const timer = setTimeout(() => {
      setShowOpening(false);
    }, 3000); // you can adjust the duration here

    // Cleanup
    return () => clearTimeout(timer);
  }, []);

  return <>{showOpening ? <Opening /> : <Home />}</>;
}

export default App;
