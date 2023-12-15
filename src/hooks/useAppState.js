import { createContext, useState } from "react";
import { REGIONS, MAX_SEED } from "../utils/consts";

export const Context = createContext()

export const useAppState = () => {
  const [seed, setSeed] = useState(Math.ceil(Math.random() * MAX_SEED))
  const [errorQantity, setErrorQuantity] = useState(0)
  const [region, setRegion] = useState(REGIONS.us.id)

  return { seed, setSeed, errorQantity, setErrorQuantity, region, setRegion }
}