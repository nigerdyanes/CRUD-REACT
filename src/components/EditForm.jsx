import React from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";

const URL = "http://localhost:3001/users";

const EditForm = ({ data }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    fetch(`${URL}/${data.id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => history.push("/home"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card mt-5">
          <div className="card-body">
            <input defaultValue={data.id} {...register("id")} hidden />
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                {...register("username", { required: true })}
                className="form-control"
                placeholder="testExample"
                defaultValue={data.username}
              />
              {errors.username && (
                <div className="alert alert-danger mt-2" role="alert">
                  Please enter username is required
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="form-control"
                placeholder="name@example.com"
                defaultValue={data.email}
              />
              {errors.email && (
                <div className="alert alert-danger mt-2" role="alert">
                  Please enter email is required
                </div>
              )}
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

export default EditForm;
