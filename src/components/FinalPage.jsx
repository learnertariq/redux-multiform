import React from "react";

const FinalPage = () => {
  const data = [
    { name: "Tariq", age: 23 },
    { name: "Niaz", age: 24 },
    { name: "Sadek", age: 25 },
  ];
  return (
    <div>
      <h1 className="text-center text-5xl">Final Data</h1>
      <div className="flex gap-4 justify-center mt-6">
        {data.map((item) => (
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body text-center">
              <h2 className="text-2xl">{item.name}</h2>
              <p className="text-xl">Age: {item.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalPage;
