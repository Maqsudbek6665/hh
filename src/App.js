import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [click, setclick] = useState(false);

  return (
    <div className="App">
      <h1>App JS</h1>
      <button>Button</button>
    </div>
  );
}

export default App;
