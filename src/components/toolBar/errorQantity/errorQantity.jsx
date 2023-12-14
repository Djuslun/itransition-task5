import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useErrorQuantity } from './useErrorQuantity';

const ErrorQuantity = ({ }) => {
  const { handleInputChange, handleSliderChande, errorQantityInputValue } = useErrorQuantity()

  return (
    <div className='flex items-center gap-4'>
      <p>Errors: </p>
      <Box sx={{ width: 200 }}>
        <Slider
          aria-label="errors"
          value={errorQantityInputValue}
          valueLabelDisplay="auto"
          onChange={handleSliderChande}
          step={0.5}
          min={0}
          max={10}
        />
      </Box>
      <input
        className='border border-gray-700 p-2 rounded-md' type='number'
        min={0}
        max={1000}
        value={errorQantityInputValue}
        step={0.5}
        onChange={handleInputChange} />
    </div>
  )
}

export default ErrorQuantity