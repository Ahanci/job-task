import React, { useState } from "react";
import "./assets/styles.css";

const TypeB = () => {
  const [birthdate, setBirthdate] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setBirthdate(input);
    const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2[0-8])\/(19|20)\d\d$/;
    setIsValid(regex.test(input));
  };

  const completeTaskHandler = () => {
    alert(birthdate);
  };
  return (
    <div>
      <label htmlFor="birthdateInput">Doğum Tarihi: </label>
      <input
        id="birthdateInput"
        type="text"
        value={birthdate}
        onChange={handleInputChange}
        style={{ borderColor: isValid ? "black" : "red" }}
      />
      {!isValid && (
        <p style={{ color: "red" }}>
          Lütfen geçerli bir doğum günü giriniz(Format: "MM/DD/YYYY")
        </p>
      )}
      {birthdate && isValid && (
        <div className="buttonContainer">
          <button onClick={completeTaskHandler}>Tamamla</button>
        </div>
      )}
    </div>
  );
};

export default TypeB;
