/** @jsxImportSource @emotion/react */
import { containerStyle } from "./table_container.css";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
import TableTitle from "../TableColumnNames/TableColumnNames";
import { useTableContext } from "../../context/tableContext";

const TableContainer = () => {
  const { showAlert, files } = useTableContext();

  //container for table
  return (
    <div
      aria-label="table component"
      css={containerStyle(showAlert, files.length)}
    >
      <TableHeader />
      <TableTitle />
      <TableRow />
    </div>
  );
};

export default TableContainer;
