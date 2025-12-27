'use client'
import Image from "next/image";
import { useState } from 'react';
import { Lightbulb } from "./components/LightBulb";
import { Switch } from './components/Switch';

export default function Home() {
  // state variables
  const [switchOn, setSwitchOn] = useState(false);
  // NOTE: if the switch is on, then the light is on

  // EFFECTS: function handler to flick switch
  function flickSwitch() {
    // 1. flick the switch
    if (switchOn) {
      setSwitchOn(false);
    }
    else {
      setSwitchOn(true)
    }
  };

  return (
    <div>
      <Lightbulb switchOn={switchOn} />
      <Switch flickSwitchHandler={flickSwitch} />
    </div>
  );
}


