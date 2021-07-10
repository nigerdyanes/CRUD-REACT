import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

const URL = "http://localhost:3001/users";

const Form = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    fetch(URL, {
      method: "post",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(() => history.push('/home') )
    .catch((error) => console.log(error))
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card mt-5">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                {...register("username")}
                type="text"
                className="form-control"
                placeholder="testExample"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                {...register("email")}
                type="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-success">
                Save User
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
