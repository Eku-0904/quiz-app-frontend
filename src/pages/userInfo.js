import React, { useState } from "react";
import axios from "axios";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const UserInfo = ({ factData }) => {
  //UwUwUwUwUwUwuUwuUwuwUWuUWuUUwuUwUwUuwUwUwUwYwYwuwUwUwuwuwuuwuwuWUUWUWUWUWUUWUWUWUWUWUUWUWUWUWU
  const initialLikes = (factData && factData.Like) || [];
  const initialDislikes = (factData && factData.Dislike) || [];

  const [Likes, setLikes] = useState(initialLikes);
  const [Dislikes, setDislikes] = useState(initialDislikes);
  const [error, setError] = useState("");

  const loggedUserID = localStorage.getItem("userID");

  const handleLike = async () => {
    try {
      if (!factData || !factData._id) {
        console.error("Invalid factData:", factData);
        return;
      }

      const res = await axios.post(
        `http://localhost:999/addLikes/${factData._id}/${loggedUserID}`
      );
      console.log("Like response:", res.data);
      //asdfghgfdsasdfghgfdswaqawsdfghfdsaыбөаөбыйsdfcvUQUQUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUUWUWUWUWUUWUWUWUWU
      setLikes(res.data.Likes);
      setDislikes(res.data.Dislikes);
    } catch (error) {
      console.error("Error liking:", error);
      setError(error.message || "Error liking");
    }
  };

  const handleDislike = async () => {
    try {
      if (!factData || !factData._id) {
        console.error("Invalid factData:", factData);
        return;
      }

      const res = await axios.post(
        `http://localhost:999/disLikes/${factData._id}/${loggedUserID}`
      );
      console.log("Dislike response:", res.data);
      //UWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUWUUWUWUWUWUWUWUUWUWUWUWUWUWUUWUWUWUWUWUUWUWUWUWU
      setLikes(res.data.Likes);
      setDislikes(res.data.Dislikes);
    } catch (error) {
      console.error("Error disliking:", error);
      setError(error.message || "Error disliking");
    }
  };

  return (
    <div className="userInfoContainer">
      <div
        className="userInfoItem"
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}
      >
        {factData && factData.title}
      </div>
      <div className="userInfoItem">{factData && factData.text}</div>
      <div className="userInfoItem">{factData && factData.userID}</div>
      <div className="userInfoItem">Likes: <span style={{ fontSize: "20px" }}>{Likes.length}</span></div>
      <div className="userInfoItem">Dislikes: <span style={{ fontSize: "20px" }}>{Dislikes.length}</span></div>
      <ThumbUpIcon onClick={handleLike} />
      <ThumbDownIcon onClick={handleDislike} />
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default UserInfo;
