
import { useContext, createContext, ReactNode, useState } from "react";

// custom interface to define the type of the Switch Context
interface SwitchContextType {
  switchOn: boolean;
  flickSwitch: () => void; // function that returns void
};

export const SwitchContext = createContext<SwitchContextType | undefined>(undefined);

export const useSwitchContext = () => {
  const context = useContext(SwitchContext);
  if (!context) {
    throw new Error('useSwitchContext must be used within SwitchContext.Provider');
  }
  return context;
};

// Provider component that manages the state
export function SwitchProvider({ children }: { children: ReactNode }) {
  const [switchOn, setSwitchOn] = useState(false);

  function flickSwitch() {
    setSwitchOn(!switchOn);
  }

  return (
    <SwitchContext.Provider value={{ switchOn, flickSwitch }}>
      {children}
    </SwitchContext.Provider>
  );
}
