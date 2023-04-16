import React, { useState } from "react";
import "./assets/styles.css";

const TypeA = () => {
  const [name, setName] = useState(undefined);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const completeTaskHandler = () => {
    alert(name);
  };
  return (
    <div className="formContainer">
      <div>
        <label htmlFor="nameInput">Ad: </label>
        <input
          id="nameInput"
          type="text"
          value={name}
          onChange={handleChange}
        />
      </div>
      {name && (
        <div className="buttonContainer">
          <button onClick={completeTaskHandler}>Tamamla</button>
        </div>
      )}
    </div>
  );
};

export default TypeA;
