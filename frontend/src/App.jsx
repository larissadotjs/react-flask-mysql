import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Table from "./components/Table";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  }, []);

  return (
    <div class="container mx-auto">
      <h1 className="text-2xl font-semibold mb-4">A - Table Option</h1>
      <Table data={data} />
      <div className="border border-t my-4"></div>
      <h1 className="text-2xl font-semibold mb-4">B - Cards Option</h1>
      <Cards data={data} />
    </div>
  );
}

export default App;
