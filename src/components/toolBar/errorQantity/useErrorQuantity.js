import { useContext, useState } from 'react';
import { Context } from '../../../hooks/useAppState';
import { useDebouncedValue } from '../../../hooks/useDebouncedValue';

export const useErrorQuantity = () => {
  const { errorQantity, setErrorQuantity } = useContext(Context)
  const [errorQantityInputValue, setErrorQantityInputValue] = useState(errorQantity)
  useDebouncedValue(errorQantityInputValue, setErrorQuantity)

  const handleInputChange = (event) => {
    const rounderValue = event.target.value < 1000
      ? Math.floor(event.target.value * 2) / 2
      : 1000
    setErrorQantityInputValue(rounderValue)
  }

  const handleSliderChande = (event) => {
    setErrorQantityInputValue(event.target.value)
  }

  return { handleInputChange, handleSliderChande, errorQantityInputValue }
}