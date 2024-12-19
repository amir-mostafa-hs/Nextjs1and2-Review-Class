"use client";

import { useState } from "react";

const ClientComponent = () => {
  const [data, setData] = useState(0);
  return (
    <div>
      <h2>ClientComponent {data}</h2>
      <button
        onClick={() => setData(data + 1)}
        className="bg-black text-white p-2 rounded-lg"
      >
        click me!
      </button>
    </div>
  );
};
export default ClientComponent;
