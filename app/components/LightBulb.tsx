import { useSwitchContext } from "../contexts/SwitchContext";

export function Lightbulb() {
  const context = useSwitchContext();
  const light = context.switchOn ? 1 : 0;
  return (
    <div>
      {light}
    </div>
  )
}
