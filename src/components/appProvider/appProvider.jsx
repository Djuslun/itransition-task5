import { useAppState, Context } from '../../hooks/useAppState';

const AppProvider = ({ children }) => {
  const appState = useAppState()

  return (
    <Context.Provider value={appState}>
      {children}
    </Context.Provider>
  )
}

export default AppProvider