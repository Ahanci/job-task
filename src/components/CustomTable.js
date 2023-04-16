import React from "react";
import "./assets/styles.css";

const CustomTable = ({ headerData, rowData }) => {
  return (
    <div className="tableContainer">
      <table className="custom-table">
        <thead>
          <tr>
            {headerData?.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData?.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key) => (
                <td key={key}>{item[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
