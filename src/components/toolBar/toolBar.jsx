import SeedInput from "./seedInput/seedInput"
import RegionSelect from "./regionSelect/regionSelect"
import ErrorQuantity from "./errorQantity/errorQantity"

const ToolBar = ({ }) => {
  return (
    <div className='flex gap-3 items-center justify-between'>
      <RegionSelect />
      <ErrorQuantity />
      <SeedInput />
    </div>
  )
}

export default ToolBar