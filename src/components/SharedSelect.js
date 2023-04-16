import React from "react";
import "./assets/styles.css";

const SharedSelect = ({ data, value, setValue }) => {
  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <select
      className="customSelect"
      value={value}
      onChange={handleSelectChange}
    >
      <option value="">Seçiniz</option>
      {data.map((option) => (
        <option key={option.id} value={option.id}>
          {option.nama}
        </option>
      ))}
    </select>
  );
};

export default SharedSelect;
