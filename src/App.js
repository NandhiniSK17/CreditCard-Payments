import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [creditcard, setCreditcard] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{creditcard.length} BILL PAYMENTS FOR DECEMBER 2020 </h3>
        <List creditcard={creditcard} />
        <button onClick={() => setCreditcard([])}> ALL PAYMENTS DONE</button>
      </section>
    </main>
  );
}

export default App;
