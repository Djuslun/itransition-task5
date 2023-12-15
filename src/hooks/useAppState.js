import { createContext, useState } from "react";
import { REGIONS } from "../utils/consts";

export const Context = createContext()

export const useAppState = () => {
  const [seed, setSeed] = useState(0)
  const [errorQantity, setErrorQuantity] = useState(0)
  const [region, setRegion] = useState(REGIONS.us.id)

  return { seed, setSeed, errorQantity, setErrorQuantity, region, setRegion }
}