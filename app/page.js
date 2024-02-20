'use client'
import Image from "next/image";
import { useState } from "react";

export default function Home() {

  const [anil,setAnil] = useState("Denemememememememe")
  return (
    <main>
      <h1>{anil}</h1>
    </main>
  );
}
