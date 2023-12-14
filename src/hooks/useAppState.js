import { createContext, useState, useEffect } from "react";
import { REGIONS } from "../utils/consts";

export const Context = createContext()

export const useAppState = () => {
  const [seed, setSeed] = useState(Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER))
  const [errorQantity, setErrorQuantity] = useState(0)
  const [region, setRegion] = useState(REGIONS.en)

  useEffect(() => {
    console.log({ errorQantity, seed, region })
  }, [errorQantity, seed, region])

  return { seed, setSeed, errorQantity, setErrorQuantity, region, setRegion }
}