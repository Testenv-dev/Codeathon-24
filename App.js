import React, { useState } from 'react';
import QueryBox from './components/QueryBox';
import FileSelectionPanel from './components/FileSelectionPanel';
import MaskingInterface from './components/MaskingInterface';
import './App.css';  // Import the CSS file

function App() {
  const [fileDataList, setFileDataList] = useState([]);
  const [chosenFiles, setChosenFiles] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');  // Add state for search text

  const handleFileSearch = (retrievedFiles, keyword) => {
    setFileDataList(retrievedFiles);  // Set the file list returned from the search
    setSearchKeyword(keyword);  // Set the search keyword
  };

  const handleFileSelection = (markedFiles) => {
    setChosenFiles(markedFiles);  // Update selected files
    console.log('Marked Files:', markedFiles);
  };

  return (
    <div className="App">
      <h1>Text Finder and Masking Tool</h1>

      {/* Search Form */}
      <div className="search-section">
        <QueryBox onFileSearch={handleFileSearch} />
      </div>

      {/* File List */}
      {fileDataList.length > 0 && (
        <div className="file-display-section">
          <FileSelectionPanel files={fileDataList} onFileSelection={handleFileSelection} />
        </div>
      )}

      {/* Mask Form */}
      {chosenFiles.length > 0 && (
        <div className="masking-section">
          <MaskingInterface selectedFiles={chosenFiles} searchText={searchKeyword} />  {/* Pass search text */}
        </div>
      )}
    </div>
  );
}

export default App;
