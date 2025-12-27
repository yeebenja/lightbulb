'use client'
import Image from "next/image";
import { useState, useContext, createContext } from 'react';
import { Lightbulb } from "./components/LightBulb";
import { Switch } from './components/Switch';
import { SwitchContext, SwitchProvider, useSwitchContext } from "./contexts/SwitchContext";

export default function Home() {

  return (
    <div>
      <SwitchProvider>
        <Lightbulb />
        <Switch />
      </SwitchProvider>
    </div>
  );
}


