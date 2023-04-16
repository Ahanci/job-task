import { CustomTable } from "../../components";
import { designListTableData, designListTableHeader } from "../../data";

const DesignTable = () => {
  return (
    <CustomTable
      headerData={designListTableHeader}
      rowData={designListTableData}
    />
  );
};

export default DesignTable;
