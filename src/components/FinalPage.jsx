import React from "react";

const FinalPage = () => {
  const data = [
    { name: "Tariq", age: 23 },
    { name: "Niaz", age: 24 },
    { name: "Sadek", age: 25 },
  ];
  return (
    <div>
      {data.map((item) => (
        <div class="card w-96 bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">{item.name}</h2>
            <p>Age: {item.age}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Age: {item.age}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FinalPage;
