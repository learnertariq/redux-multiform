import React from "react";
import { Link } from "react-router-dom";

const Form = ({ title = "Title", onGetRoute }) => {
  return (
    <div className="container mx-auto">
      <form className="flex flex-col items-center">
        <h1 className="text-3xl my-6">
          Form - <strong>Page {title}</strong>
        </h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Age</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
          />
        </div>
        <div className="mt-8">
          <Link
            to={onGetRoute()}
            type="submit"
            className="btn btn-success btn-outline btn-wide font-bold text-2xl"
          >
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
