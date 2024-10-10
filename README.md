
# Text Finder and Masking Tool

The Text Finder and Masking Tool is a web application designed to search for specific text across multiple files and replace it with a user-defined masking character. The application provides a user-friendly interface for searching, selecting files, and applying masking, all powered by a Flask backend and a React frontend.

# Text Finder and Masking Tool

## Overview

The Text Finder and Masking Tool is a web application designed to search for specific text across multiple files and replace it with a user-defined masking character. The application provides a user-friendly interface for searching, selecting files, and applying masking, all powered by a Flask backend and a React frontend.

## Features

- Search for text within files (supports `.txt`, `.json`, and `.xml` formats).
- Select individual or multiple files from the search results.
- Mask the searched text with a specified character.
- Responsive design for seamless use on various devices.

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Flask
- **Database**: SANDRA (Quartz)
- **CSS**: Custom styles for responsive design

## Setup Instructions

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js and npm (for running the React application)
- Python 3.x (for running the Flask API)
- QzDev

### 1. Clone the Repository


```git clone https://github.com/Codeathon-24.git ```

```cd Codeathon-24 ```

### 2. Setting up env

-Install required Node.js packages:
```npm install```
```npm create-react-app my-app```
```npm start```
The React app should now be running at http://localhost:3000.

-Install required Python packages
-Configure your database connection
-Run the Flask API:
```python app.py```

### 3. Database Setup
Ensure that your database is set up correctly, and the files exists with the necessary structure. 


### 4. File structure
REACT_TEST/

    venv                   # Virtual environment
    ├── api/
        ├── db/                # Database related files
            ├──app.py             # Main API application
          
    src/
        ├── components/     # React components
        │   ├── FileSelectionPanel.js
        │   ├── MaskedInterface.js
        │   └── Querybox.js
        ├── App.js          # Main application file
        ├── App.css         # Styles for the React app
        └── App.test.js     # Test file for App.js
    node_modules/      # Node.js modules (auto-generated)


### 5 . Usage
- Use the search input to enter the text you want to find across files.
- Review the search results and select the files you want to mask.
- Enter the mask character to replace the found text in the selected files.
- Confirm the action to apply the masking.

### 6. Contributing
Contributions are welcome! If you have suggestions or improvements, please feel free to fork the repository and submit a pull request.

