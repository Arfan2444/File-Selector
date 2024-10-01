import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  // useState Hook used to update and set the file variable.
  const [files, setFiles] = useState(null);

  // Declaring inputRef variable for using useRef() hook.
  const inputRef = useRef();

  // event which get executed when the file is dragged.
  const handleDragOver = (event) => {
    event.preventDefault(); // to prevent default Behaviour
    console.log(event); //event get triggered to know that user is dragging the file
  };

  // event which get executed when the file is dropped.
  const handleDrop = (event) => {
    event.preventDefault(); // to prevent default Behaviour
    setFiles(event.dataTransfer.files); // Data Transfer Property is used to access the files information
  };

  const ConvertFile = () => {};

  if (files)
    return (
      <div className="Upload">
        <ol>
          <span>Your Uploaded Files</span>
          {Array.from(files).map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ol>

        {/* Button to reset the state of files variable and call convert function onclick */}
        <div className="actions">
          <button className="btn2" onClick={() => setFiles(null)}>Cancel</button>
          <button className="btn2" onClick={ConvertFile}>Convert Your File</button>
        </div>
      </div>
    );

  return (
    <>
      {/* !file executes only when there no file selected  */}
      {!files && (
        <div
          className="Dropzone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h1>📁Drag and Drop your Files Here</h1>
          <h1>Or</h1>

          {/* This input is hidden and work on button click using useRef() hook */}
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          ></input>
          {/* Here on the button onclick  event it triggers the input with inputref reference */}
          <button onClick={() => inputRef.current.click()} className="btn">
            <img src="dropbox.png"></img>
            Select your File
          
          </button>
        </div>
      )}
    </>
  );
}

export default App;
