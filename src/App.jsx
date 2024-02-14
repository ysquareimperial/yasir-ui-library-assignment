import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
// import { CounterComponent } from 'ui-library'; // Assuming CounterComponent is exported from your ui-library package

function App() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setMounted(true);
    console.log("Component mounted");
    return () => {
      console.log("Component unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("State changed:", count);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="whole">
      <p>Yasir - UI Library Assignment</p>

      <div>
        <h1>{count}</h1>
      </div>
      <div>
        <button onClick={handleIncrement}>Click to Add</button>
      </div>
    </div>
  );
}

export default App;
