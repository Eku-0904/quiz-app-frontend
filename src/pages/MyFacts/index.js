import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInfo from "../userInfo";

const MyFacts = () => {
  const [myFacts, setMyFacts] = useState([]);
  const [error, setError] = useState("");

  const fetchUserFacts = async () => {
    try {
      const userID = localStorage.getItem("userID");
      const response = await axios.get(
        `https://quiz-app-back-end-wuso.onrender.com/facts/user/${userID}`
      );
      setMyFacts(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching user facts:", error);
      setError(error.message || "Internal Server Error");
    }
  };

  useEffect(() => {
    fetchUserFacts();
  }, []);

  return (
    <div>
      <h1>My Facts</h1>

      {error && <p>Error: {error}</p>}

      {Array.isArray(myFacts) &&
        myFacts.map((fact) => <UserInfo key={fact._id} factData={fact} />)}
    </div>
  );
};

export default MyFacts;
