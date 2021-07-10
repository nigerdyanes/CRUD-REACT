import React, { useState, useEffect } from "react";

import Card from "../components/Card";
const URL = "http://localhost:3001/users";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  },[]);

  return (
    <div className="container mt-5">
      <div className="row">
        {users.length !== 0 && users.map((item) => 
          <Card key={item.id} data={item} />
        )}
      </div>
    </div>
  );
};

export default Home;
