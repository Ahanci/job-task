import { useState } from "react";
import { checkData } from "../data";
import "./assets/styles.css";

const RadioGroup = ({ setSelectedOption }) => {
  const [selectedOptionSelect, setSelectedOptionSelect] = useState(
    checkData[0].id
  );
  const handleOptionChange = (e) => {
    setSelectedOption(parseInt(e.target.value)); // Update selected option on radio change
  };

  return (
    <div className="radioContainer">
      {checkData.map((option) => (
        <label key={option.id}>
          <input
            type="radio"
            name="option"
            value={option.id}
            onChange={handleOptionChange}
          />
          {option.nama}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
