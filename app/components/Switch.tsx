
import { useSwitchContext } from "../contexts/SwitchContext"
export function Switch() {
  const context = useSwitchContext();
  return (
    <button onClick={context.flickSwitch}>
      switch
    </button>
  )
}
