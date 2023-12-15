import SeedInput from "./seedInput/seedInput"
import RegionSelect from "./regionSelect/regionSelect"
import ErrorQuantity from "./errorQantity/errorQantity"
import CsvExport from "./csvExport/csvExport"

const ToolBar = ({ users }) => {
  return (
    <div className='flex flex-col items-start gap-3  justify-between mb-4 lg:flex-row lg:items-center'>
      <RegionSelect />
      <ErrorQuantity />
      <SeedInput />
      <CsvExport users={users} >Export CSV</CsvExport>
    </div>
  )
}

export default ToolBar