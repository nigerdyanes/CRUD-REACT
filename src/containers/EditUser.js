import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import EditForm from "../components/EditForm";

const URL = "http://localhost:3001/users";

const EditUser = () => {
  const { idUser } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`${URL}/${idUser}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  },[idUser]);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Edit User {idUser} </h1>
        {user.length !== 0 &&
        <EditForm key={user.id} data={user} />}
      </div>
    </div>
  );
};

export default EditUser;
