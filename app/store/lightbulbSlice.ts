import { createSlice } from '@reduxjs/toolkit'

// interface of state
interface LightbulbState {
  switchOn: boolean
}

// initial state
const initialState: LightbulbState = {
  switchOn: false
}

// slice reducer
const lightbulbSlice = createSlice({
  // NOTE: this is the namespace/prefix of your action types.
  // So Redux Toolkit will automatically generate these action types for you:
  // 'lightbulb/toggle'
  // 'lightbulb/turnOn'
  // 'lightbulb/turnOff'
  name: 'lightbulb',
  initialState, // initial state
  // reducers for different actions
  reducers: {
    toggle: (state) => {
      state.switchOn = !state.switchOn
    },
    turnOn: (state) => {
      state.switchOn = true
    },
    turnOff: (state) => {
      state.switchOn = false
    }
  }
})

// export the generated action creators for use in components
export const { toggle, turnOn, turnOff } = lightbulbSlice.actions

// export the slice reducer for use in the store configuration
export default lightbulbSlice.reducer
