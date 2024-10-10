import React from 'react';

const FileSelectionPanel = ({ files, onFileSelection }) => {
    const [selectedFileTracker, setSelectedFileTracker] = React.useState({});

    const toggleFileSelection = (fileName) => {
        setSelectedFileTracker((previouslySelected) => ({
            ...previouslySelected,
            [fileName]: !previouslySelected[fileName],  // Toggle the selected state
        }));
        onFileSelection(selectedFileTracker);  // Pass updated selected files
    };

    const markAllFiles = (event) => {
        const selectAllFlag = event.target.checked;
        const allMarkedFiles = {};
        files.forEach(fileItem => {
            allMarkedFiles[fileItem.name] = selectAllFlag;
        });
        setSelectedFileTracker(allMarkedFiles);
        onFileSelection(Object.keys(allMarkedFiles).filter(fileName => allMarkedFiles[fileName]));  // Pass all selected files
    };

    return (
        <div>
            <h2>File List</h2>
            <label>
                <input 
                    type="checkbox" 
                    onChange={markAllFiles} 
                /> Mark All
            </label>
            <ul>
                {files.map((fileItem) => (
                    <li key={fileItem.name}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={selectedFileTracker[fileItem.name] || false} 
                                onChange={() => toggleFileSelection(fileItem.name)} 
                            />
                            {fileItem.name} - Found Occurrences: {fileItem.occurrences}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FileSelectionPanel;
