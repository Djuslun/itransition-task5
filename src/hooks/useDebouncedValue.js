import { useEffect } from 'react';
import { useDebounce } from 'use-debounce';

export const useDebouncedValue = (value, setValue) => {
  const [debouncedValue] = useDebounce(value, 300)

  useEffect(() => {
    setValue(debouncedValue)
  }, [debouncedValue])
}