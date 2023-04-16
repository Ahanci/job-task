import { CustomTable } from "../../components";
import { patentListTableData, patentListTableHeader } from "../../data";
const PatentTable = () => {
  return (
    <CustomTable
      headerData={patentListTableHeader}
      rowData={patentListTableData}
    />
  );
};

export default PatentTable;
