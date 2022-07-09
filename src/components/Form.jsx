import React from "react";

const Form = ({ title = "Title" }) => {
  return (
    <div>
      <h1>Form - Page {title}</h1>
      <form>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Age</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            class="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
