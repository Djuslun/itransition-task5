import useSeed from './useSeed';
import { Button } from '@mui/material'
import ShuffleIcon from '@mui/icons-material/Shuffle';

const SeedInput = ({ }) => {
  const { handleSeedChange, setRandomSeed, seedInputValue } = useSeed()

  return (
    <div className='flex gap-2 items-center'>
      <p>Seed: </p>
      <input
        className='border border-gray-700 p-2 rounded-md' type='number'
        min={0}
        max={Number.MAX_SAFE_INTEGER}
        value={seedInputValue}
        step={1}
        onChange={handleSeedChange}
      />
      <Button
        onClick={() => setRandomSeed()}
        sx={{ color: '#1976d2', ":hover": { color: '#000' } }}>
        <ShuffleIcon sx={{ width: '1.5em', height: '1.5em' }} />
      </Button>
    </div>
  )
}

export default SeedInput