'use client'
import { useDispatch } from 'react-redux'
import { toggle } from '../store/lightbulbSlice'

export function Switch() {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(toggle())}>
      switch
    </button>
  )
}
