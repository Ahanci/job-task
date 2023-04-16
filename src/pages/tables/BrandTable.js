import React from "react";
import { CustomTable } from "../../components";
import { brandTableHeader, brandTableData } from "../../data";

const BrandTable = () => {
  return <CustomTable headerData={brandTableHeader} rowData={brandTableData} />;
};

export default BrandTable;
