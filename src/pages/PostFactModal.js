// import React, { useState } from 'react';
// import { Modal, Button, TextField } from '@mui/material';
// import axios from 'axios';

// const PostFactModal = ({ open, onClose, onPost }) => {
//   const [factText, setFactText] = useState('');
//   const [factTitle, setFactTitle] = useState('');

//   const handlePost = async () => {
//     try {
//       await onPost({ text: factText, title: factTitle });
//       setFactText('');
//       setFactTitle('');
//       onClose();
//     } catch (error) {
//       console.error('Error post fact:', error);
//     }
//   };

//   return (
//     <Modal open={open} onClose={onClose}>
//       <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
//         <TextField
//           label="Fact Text"
//           multiline
//           rows={4}
//           variant="outlined"
//           fullWidth
//           value={factText}
//           onChange={(e) => setFactText(e.target.value)}
//           style={{ marginBottom: 10 }}
//         />

//         <TextField
//           label="Fact Title"
//           variant="outlined"
//           fullWidth
//           value={factTitle}
//           onChange={(e) => setFactTitle(e.target.value)}
//           style={{ marginBottom: 10 }}
//         />

//         <Button variant="contained" color="primary" onClick={handlePost}>
//           Post Fact
//         </Button>
//       </div>
//     </Modal>
//   );
// };

// export default PostFactModal;









import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import axios from 'axios';

const PostFactModal = ({ open, onClose, onPost }) => {
  const [factText, setFactText] = useState('');
  const [factTitle, setFactTitle] = useState('');

  const handlePost = async () => {
    try {
      if (factText.trim() === "" || factTitle.trim() === "") {
        alert('Please fill in both Fact Text and Fact Title');
        return;
      }
      await onPost({ text: factText, title: factTitle });
      setFactText('');
      setFactTitle('');
      onClose();
    } catch (error) {
      console.error('Error posting fact:', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
        <TextField
          label="Fact Text"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={factText}
          onChange={(e) => setFactText(e.target.value)}
          style={{ marginBottom: 10 }}
        />

        <TextField
          label="Fact Title"
          variant="outlined"
          fullWidth
          value={factTitle}
          onChange={(e) => setFactTitle(e.target.value)}
          style={{ marginBottom: 10 }}
        />

        <Button variant="contained" color="primary" onClick={handlePost}>
          Post Fact
        </Button>
      </div>
    </Modal>
  );
};

export default PostFactModal;

