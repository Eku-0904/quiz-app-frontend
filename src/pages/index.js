// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UserInfo from "../userInfo";
// import PostFactModal from "./PostFactModal";
// import EditFactModal from "./EditFactModal";
// import { useRouter } from "next/router";

// const Home = () => {
//   const router = useRouter();
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");
//   const [isPostModalOpen, setPostModalOpen] = useState(false);
//   const [isEditModalOpen, setEditModalOpen] = useState(false);
//   const [selectedFact, setSelectedFact] = useState(null);

//   const openPostModal = () => setPostModalOpen(true);
//   const closePostModal = () => setPostModalOpen(false);

//   const openEditModal = (fact) => {
//     setSelectedFact(fact);
//     setEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setSelectedFact(null);
//     setEditModalOpen(false);
//   };

//   const handlePost = async (factData) => {
//     try {
//       const response = await axios.post("http://localhost:999/facts", factData);
//       const newFact = response.data;
//       setData((prevData) => [newFact, ...prevData]);
//       closePostModal();
//     } catch (error) {
//       console.error("Error posting fact:", error);
//     }
//   };

//   const handleEdit = async (updatedFact) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:999/facts/${selectedFact._id}`,
//         updatedFact
//       );
//       const updatedData = data.map((fact) =>
//         fact._id === selectedFact._id ? response.data : fact
//       );
//       setData(updatedData);
//       closeEditModal();
//     } catch (error) {
//       console.error("Error updating fact:", error);
//     }
//   };

//   const handleDelete = async (factID) => {
//     const isConfirmed = window.confirm("Are you sure you want to delete this fact?");

//     if (isConfirmed) {
//       try {
//         await axios.delete(`http://localhost:999/facts/${factID}`);
//         fetchData();
//       } catch (error) {
//         console.error("Error deleting fact:", error);
//       }
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const res = await axios.get("http://localhost:999/facts");
//       setData(res.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError(error.message || "Internal Server Error");
//     }
//   };

//   const isUserLoggedIn = () => {
//     const user = localStorage.getItem("user");
//     if (!user) router.push("/login");
//   };

//   useEffect(() => {
//     isUserLoggedIn();
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>BeSharpQuiz</h1>
//       <button onClick={openPostModal} className="postButton">Post Fact</button>

//       {Array.isArray(data) &&
//         data.map((cur) => (
//           <div key={cur._id}>
//             <UserInfo factData={cur} />
//             <button onClick={() => openEditModal(cur)} className="editButton">Edit</button>
//             <button onClick={() => handleDelete(cur._id)} className="deleteButton">Delete</button>
//           </div>
//         ))}

//       <PostFactModal
//         open={isPostModalOpen}
//         onClose={closePostModal}
//         onPost={handlePost}
//       />

//       <EditFactModal
//         open={isEditModalOpen}
//         onClose={closeEditModal}
//         onEdit={handleEdit}
//         factData={selectedFact}
//       />
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import PostFactModal from "./PostFactModal";
// import EditFactModal from "./EditFactModal";
// import MyFacts from "./MyFacts"; // Import MyFacts component
// import UserInfo from "./userInfo";
// import axios from "axios";
// import { useRouter } from "next/router";

// const Home = () => {
//   const router = useRouter();
//   const [isPostModalOpen, setPostModalOpen] = useState(false);
//   const [isEditModalOpen, setEditModalOpen] = useState(false);
//   const [selectedFact, setSelectedFact] = useState(null);
//   const [showMyFacts, setShowMyFacts] = useState(false); // Track whether to show MyFacts

//   const openPostModal = () => setPostModalOpen(true);
//   const closePostModal = () => setPostModalOpen(false);

//   const openEditModal = (fact) => {
//     setSelectedFact(fact);
//     setEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setSelectedFact(null);
//     setEditModalOpen(false);
//   };

//   return (
//     <div>
//       <h1>BeSharpQuiz</h1>
//       <button onClick={openPostModal} className="postButton">
//         Post Fact
//       </button>

//       <button
//         onClick={() => {
//           setShowMyFacts(true);
//         }}
//         className="myFactsButton"
//       >
//         My Facts
//       </button>

//       {showMyFacts ? (
//         <MyFacts /> // Conditionally render MyFacts component
//       ) : (
//         // Render other content based on your logic
//         <div>
//           {Array.isArray(data) &&
//             data.map((cur) => (
//               <div key={cur._id}>
//                 <UserInfo factData={cur} />
//                 <button onClick={() => openEditModal(cur)} className="editButton">
//                   Edit
//                 </button>
//                 <button onClick={() => handleDelete(cur._id)} className="deleteButton">
//                   Delete
//                 </button>
//               </div>
//             ))}
//         </div>
//       )}

//       <PostFactModal
//         open={isPostModalOpen}
//         onClose={closePostModal}
//         onPost={handlePost}
//       />

//       <EditFactModal
//         open={isEditModalOpen}
//         onClose={closeEditModal}
//         onEdit={handleEdit}
//         factData={selectedFact}
//       />
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import UserInfo from "./userInfo";
// import PostFactModal from "./PostFactModal";
// import EditFactModal from "./EditFactModal";
// import { useRouter } from "next/router";

// const Home = () => {
//   const router = useRouter();
//   const [data, setData] = useState([]);
//   const [error, setError] = useState("");
//   const [isPostModalOpen, setPostModalOpen] = useState(false);
//   const [isEditModalOpen, setEditModalOpen] = useState(false);
//   const [selectedFact, setSelectedFact] = useState(null);

//   const openPostModal = () => setPostModalOpen(true);
//   const closePostModal = () => setPostModalOpen(false);

//   const openEditModal = (fact) => {
//     setSelectedFact(fact);
//     setEditModalOpen(true);
//   };

//   const closeEditModal = () => {
//     setSelectedFact(null);
//     setEditModalOpen(false);
//   };

//   const handlePost = async (factData) => {
//     try {
//       const response = await axios.post("http://localhost:999/facts", factData);
//       const newFact = response.data;
//       setData((prevData) => [newFact, ...prevData]);
//       closePostModal();
//     } catch (error) {
//       console.error("Error posting fact:", error);
//     }
//   };

//   const handleEdit = async (updatedFact) => {
//     try {
//       const response = await axios.put(
//         `http://localhost:999/facts/${selectedFact._id}`,
//         updatedFact
//       );
//       const updatedData = data.map((fact) =>
//         fact._id === selectedFact._id ? response.data : fact
//       );
//       setData(updatedData);
//       closeEditModal();
//     } catch (error) {
//       console.error("Error updating fact:", error);
//     }
//   };

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setData(response.data);
//       setError(null);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setError(error.message || "Internal Server Error");
//     }
//   };

//   const isUserLoggedIn = () => {
//     const user = localStorage.getItem("user");
//     if (!user) router.push("/login");
//   };

//   useEffect(() => {
//     isUserLoggedIn();
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>BeSharpQuiz</h1>
//       <button onClick={openPostModal} className="postButton">
//         Post Fact
//       </button>

//       {Array.isArray(data) &&
//         data.map((cur) => (
//           <div key={cur.id}>
//             <UserInfo factData={cur} />
//             <button onClick={() => openEditModal(cur)} className="editButton">
//               Edit
//             </button>
//           </div>
//         ))}

//       <PostFactModal
//         open={isPostModalOpen}
//         onClose={closePostModal}
//         onPost={handlePost}
//       />

//       <EditFactModal
//         open={isEditModalOpen}
//         onClose={closeEditModal}
//         onEdit={handleEdit}
//         factData={selectedFact}
//       />
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import UserInfo from "./userInfo";
import PostFactModal from "./PostFactModal";
import EditFactModal from "./EditFactModal";
import moment from "moment"; // Import moment library for date calculations
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isPostModalOpen, setPostModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedFact, setSelectedFact] = useState();

  // Function to get the elapsed time since a fact was posted
  const getElapsedTime = (createdAt) => {
    const now = moment();
    const postDate = moment(createdAt);
    const diffMinutes = now.diff(postDate, "minutes");
    const diffHours = now.diff(postDate, "hours");
    const diffDays = now.diff(postDate, "days");

    if (diffDays > 0) {
      return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
    } else if (diffHours > 0) {
      return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
    } else {
      return `${diffMinutes} minute${diffMinutes > 1 ? "s" : ""} ago`;
    }
  };

  const openPostModal = () => setPostModalOpen(true);
  const closePostModal = () => setPostModalOpen(false);

  const openEditModal = (fact) => {
    setSelectedFact(fact);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedFact({ title: "", text: "" });
    setEditModalOpen(false);
  };

  // Function to get button color based on background color
  const getButtonColor = () => {
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      const body = document.querySelector("body");
      const backgroundColor = window.getComputedStyle(body).backgroundColor;

      // Choose your button color based on the background color
      return backgroundColor === "rgb(255, 110, 199)" ? "#4CAF50" : "#87CEEB"; // Light Blue
    } else {
      // Default color if running on the server or if document is undefined
      return "#4CAF50";
    }
  };

  const handlePost = async (factData) => {
    try {
      const response = await axios.post("http://localhost:999/facts", factData);
      const newFact = response.data;

      // Ensure the createdAt property is set to the current time
      newFact.createdAt = moment().toISOString();

      setData((prevData) => [newFact, ...prevData]);
      closePostModal();
    } catch (error) {
      console.error("Error posting fact:", error);
    }
  };

  const handleEdit = async (updatedFact) => {
    try {
      const response = await axios.put(
        `http://localhost:999/facts/${selectedFact._id}`,
        updatedFact
      );
      const updatedData = data.map((fact) =>
        fact._id === selectedFact._id ? response.data : fact
      );
      setData(updatedData);
      closeEditModal();
    } catch (error) {
      console.error("Error updating fact:", error);
    }
  };

  const handleDelete = async (factID) => {
    // Show a confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this fact?"
    );

    if (!confirmDelete) {
      return; // User clicked 'Cancel', do nothing
    }

    try {
      await axios.delete(`http://localhost:999/facts/${factID}`);
      const updatedData = data.filter((fact) => fact._id !== factID);
      setData(updatedData);
    } catch (error) {
      console.error("Error deleting fact:", error);
    }
  };

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:999/facts");
      setData(res.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message || "Internal Server Error");
    }
  };

  const isUserLoggedIn = () => {
    const user = localStorage.getItem("user");
    if (!user) router.push("/login");
  };

  useEffect(() => {
    isUserLoggedIn();
    fetchData();
  }, []);

  return (
    <div>
      <h1>BeSharpQuiz</h1>
      <button
        onClick={openPostModal}
        style={{
          backgroundColor: getButtonColor(),
          border: "none",
          color: getButtonColor() === "#87CEEB" ? "black" : "white",
          padding: "10px 20px",
          textAlign: "center",
          textDecoration: "none",
          display: "inline-block",
          fontSize: "16px",
          margin: "4px 2px",
          cursor: "pointer",
          borderRadius: "4px",
        }}
      >
        Post Fact
      </button>

      {Array.isArray(data) &&
        data.map((cur) => (
          <div key={cur._id}>
            <UserInfo factData={cur} />
            <p>Posted {getElapsedTime(cur.createdAt)}</p>
            <button
              onClick={() => openEditModal(cur)}
              style={{
                backgroundColor: getButtonColor(),
                border: "none",
                color: getButtonColor() === "#87CEEB" ? "black" : "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "4px",
                marginBottom: "50px",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(cur._id)}
              style={{
                backgroundColor: getButtonColor(),
                border: "none",
                color: getButtonColor() === "#87CEEB" ? "black" : "white",
                padding: "10px 20px",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                margin: "4px 2px",
                cursor: "pointer",
                borderRadius: "4px",
              }}
            >
              Delete
            </button>
          </div>
        ))}

      <PostFactModal
        open={isPostModalOpen}
        onClose={closePostModal}
        onPost={handlePost}
      />

      {/* {data.map((fact) => { */}
      {isEditModalOpen && (
        <EditFactModal
          open={isEditModalOpen}
          onClose={closeEditModal}
          onEdit={handleEdit}
          factData={selectedFact}
          // fcatId={fact._id}
        />
      )}

      {/* })} */}
    </div>
  );
};

export default Home;
