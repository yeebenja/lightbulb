
export function Switch({ flickSwitchHandler }: { flickSwitchHandler: () => void }) {
  return (
    <button onClick={flickSwitchHandler}>
      switch
    </button>
  )
}
