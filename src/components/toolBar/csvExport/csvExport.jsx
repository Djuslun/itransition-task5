import { CSVLink } from "react-csv";
import { CSVHeaders } from "../../../utils/consts";

const CsvExport = ({ children, users }) => {
  return (
    <CSVLink
      data={users}
      headers={CSVHeaders}
      filename={"users.csv"}
      className="bg-blue-500 py-2 px-4 rounded-md">
      {children}
    </CSVLink>
  )
}

export default CsvExport