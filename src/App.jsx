import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Success from "./components/Success";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <>
      <main>
        {isSubmitted === false ? (
          <Card setEmail={setEmail} setIsSubmitted={setIsSubmitted} />
        ) : (
          <Success email={email} />
        )}
      </main>
    </>
  );
}

export default App;
