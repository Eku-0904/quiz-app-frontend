// EditFactModal.js

import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const EditFactModal = ({ open, onClose, onEdit, factData }) => {
  console.log(factData);
  const [updatedFact, setUpdatedFact] = useState({
    title:factData?.title,
    text: factData?.text,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedFact((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => {
    onEdit(updatedFact);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          boxShadow: 24,
          p: 4,
          bgcolor: "#FFFFFF", // Soft white background color
          borderRadius: 8,
        }}
      >
        <h2>Edit Fact</h2>
        <TextField
          label="Title"
          fullWidth
          name="title"
          value={updatedFact.title}
          onChange={handleInputChange}
          style={{ marginBottom: 10 }}
        />
        <TextField
          label="Text"
          fullWidth
          name="text"
          value={updatedFact.text}
          onChange={handleInputChange}
          multiline
          rows={4}
          variant="outlined"
          style={{ marginBottom: 10 }}
        />
        <Button variant="contained" color="primary" onClick={handleEdit}>
          Update Fact
        </Button>
        <Button
          variant="contained"
          onClick={onClose}
          style={{ marginLeft: 10 }}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default EditFactModal;
