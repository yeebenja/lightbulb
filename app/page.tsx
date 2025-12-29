'use client'
import Image from "next/image";
import { useState } from 'react';
import { Lightbulb } from "./components/LightBulb";
import { Switch } from './components/Switch';

export default function Home() {

  return (
    <div>
      <Lightbulb />
      <Switch />
    </div>
  );
}


