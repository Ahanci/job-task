import React, { useState, useEffect, Suspense } from "react";
import { SharedSelect } from "../../components";
import { useNavigate, useLocation } from "react-router-dom";
import { CustomButton } from "../../components";
import "./assets/styles.css";
import Tables from "../tables";

import { checkData } from "../../data";

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const locationData = location?.state?.option;
  const [showTable, setShowTable] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [data, setData] = useState(undefined);
  console.log("locationData", locationData);

  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update input value on change
    setInputError(null); // Clear input error

    // Use regex to validate year/number input
    const regex = /^((19|20)\d{2}\/\d{1,4})$/; // Allow years between 1980 and 2100 separated by a forward slash
    if (!regex.test(value)) {
      setInputError(true);
    } else {
      setInputError(null);
    }
  };

  useEffect(() => {
    if (!locationData) {
      setVisible(true);
      console.log("hopp", "hopp");
    } else {
      setSearchType(locationData);
    }
  }, []);

  const goToNextPageHandler = () => {
    navigate("/tasks", {
      state: { taskType: searchType, applicationNo: inputValue },
    });
  };
  return (
    <div className="container">
      <h1>Sorgulama Sayfası</h1>
      <div className="containerSecond">
        {isVisible && (
          <SharedSelect
            setValue={setSearchType}
            value={searchType}
            data={checkData}
          />
        )}
        <div className="inputContainer">
          <label htmlFor="turkishPatentInput">Türk Patent Başvuru No:</label>
          <input
            type="text"
            id="turkishPatentInput"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="yıl/sayı"
          />
          {inputError && (
            <p style={{ color: "red" }}>"Lütfen geçerli bir değer girin."</p>
          )}
        </div>
        <button
          disabled={!inputValue || !searchType}
          onClick={() => setShowTable(true)}
        >
          Sorgula/listeye ekle
        </button>
      </div>

      {showTable && <Tables type={searchType} />}
      <div className="buttonContainer">
        {showTable && (
          <button onClick={goToNextPageHandler}>Task Türü Seç</button>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
