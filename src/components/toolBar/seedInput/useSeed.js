import { useContext, useState } from 'react';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';
import { Context } from '../../../hooks/useAppState'
import { MAX_SEED } from '../../../utils/consts';

const useSeed = () => {
  const { seed, setSeed } = useContext(Context)
  const [seedInputValue, setSeedInputValue] = useState(seed)
  useDebouncedValue(seedInputValue, setSeed)

  const setRandomSeed = () => {
    setSeedInputValue(Math.ceil(Math.random() * MAX_SEED))
  }

  const handleSeedChange = (event) => {
    const rounderValue = Math.floor(event.target.value)
    setSeedInputValue(rounderValue)
  }

  return { handleSeedChange, setRandomSeed, seedInputValue }
}

export default useSeed