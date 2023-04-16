import React, { useState } from "react";

const CustomFileUpload = ({ header, id }) => {
  const [selectedFile, setSelectedFile] = useState(undefined);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const completeTaskHandler = () => {
    alert(selectedFile.name);
  };
  return (
    <div>
      <h3>Marka Resmi</h3>
      <label htmlFor="imageInput">Resim yükle: </label>
      <input
        id={id}
        type="file"
        accept=".jpeg,.jpg,.png"
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div>
          <p>Seçilen Dosya: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            style={{ width: "250px", height: "auto" }}
          />
        </div>
      )}
      {selectedFile && (
        <div className="buttonContainer">
          <button onClick={completeTaskHandler}>Tamamla</button>
        </div>
      )}
    </div>
  );
};

export default CustomFileUpload;
