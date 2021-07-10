import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/components/Card.css";

const Card = ({ data }) => {
  return (
    <div className="Card col-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{data.username}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{data.email}</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
          </p>
          <div className="Buttons container">
            <div className="col-6">
              <Link
                type="button"
                className="Button btn btn-success"
                to={{ pathname: "/edit-user/" + data.id }}
              >
                Edit
              </Link>
            </div>
            <div className="col-6">
              <button type="button" className="Button btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
