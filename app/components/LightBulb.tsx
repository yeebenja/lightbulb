'use client'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export function Lightbulb() {
  const switchOn = useSelector((state: RootState) => state.lightbulb.switchOn)
  const light = switchOn ? 1 : 0;
  return (
    <div>
      {light}
    </div>
  )
}
