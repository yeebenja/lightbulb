
export function Lightbulb({ switchOn }: { switchOn: boolean }) {
  const light = switchOn ? 1 : 0;
  return (
    <div>
      {light}
    </div>
  )
}
