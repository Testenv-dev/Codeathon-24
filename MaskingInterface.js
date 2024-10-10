import React, { useState } from 'react';
import axios from 'axios';

const MaskingInterface = ({ selectedFiles, searchText }) => {
  const [maskSymbol, setMaskSymbol] = useState('');
  const [confirmPopupVisible, setConfirmPopupVisible] = useState(false);

  const processMaskSubmission = (e) => {
    e.preventDefault();
    if (maskSymbol) {
      setConfirmPopupVisible(true);
    } else {
      alert("Please enter a masking symbol.");
    }
  };

  const confirmMaskOperation = async (confirmed) => {
    if (confirmed) {
      console.log('Selected Files:', selectedFiles);
      console.log('Mask Symbol:', maskSymbol);
      console.log('Text to Replace:', searchText);  // Check the value of search text

      try {
        const apiResponse = await axios.post('http://127.0.0.1:5000/api/mask', {
          files: selectedFiles,  // Pass the selected files to the API
          mask_char: maskSymbol,
          old_text: searchText  // Pass the search text to the API
        });
        alert(apiResponse.data.message);  // Show success message from the API
      } catch (error) {
        console.error('Error during masking process:', error);
        alert('An error occurred while masking the files.');
      }
    }
    setConfirmPopupVisible(false);  // Close the confirmation popup
  };

  return (
    <div>
      <form onSubmit={processMaskSubmission}>
        <label>
          Enter Masking Symbol:
          <input
            type="text"
            value={maskSymbol}
            onChange={(e) => setMaskSymbol(e.target.value)}
            maxLength={1}  // Mask character should be a single character
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {/* Confirmation Popup */}
      {confirmPopupVisible && (
        <div className="confirmation-popup">
          <p>Are you sure you want to mask the selected files with '{maskSymbol}'?</p>
          <button onClick={() => confirmMaskOperation(true)}>Yes</button>
          <button onClick={() => confirmMaskOperation(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default MaskingInterface;
