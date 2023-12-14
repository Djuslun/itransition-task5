import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useRegionSelect from './useRegionSelect';
import { REGIONS } from '../../../utils/consts';

const RegionSelect = ({ }) => {
  const { handleChange, regionInputValue } = useRegionSelect()

  return (
    <div className='flex gap-2 items-center'>
      <FormControl sx={{ m: 1, minWidth: 100 }} size='small'>
        <InputLabel id="regionSelect">Region</InputLabel>
        <Select
          labelId="regionSelect"
          id="regionSelect"
          value={regionInputValue}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value={REGIONS.en}>EN</MenuItem>
          <MenuItem value={REGIONS.ru}>RU</MenuItem>
          <MenuItem value={REGIONS.fr}>FR</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default RegionSelect