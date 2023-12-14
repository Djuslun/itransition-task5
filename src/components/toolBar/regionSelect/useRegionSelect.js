import { useDebouncedValue } from '../../../hooks/useDebouncedValue';
import { useContext, useState } from 'react';
import { Context } from '../../../hooks/useAppState'

const useRegionSelect = () => {
  const { region, setRegion } = useContext(Context)
  const [regionInputValue, setRegionInputValue] = useState(region);
  useDebouncedValue(regionInputValue, setRegion)

  const handleChange = (event) => {
    setRegionInputValue(event.target.value);
  };

  return { handleChange, regionInputValue }
}

export default useRegionSelect