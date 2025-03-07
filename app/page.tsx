"use client";
// "average import length"
import Image from "next/image";
import { Rubik_Glitch } from "next/font/google";
import Divider from "@/components/divider";
import Tagline from "@/components/tagline";
import Tagsub from "@/components/tagsub";
import Yap from "@/components/placeholderyap";
import { motion } from "motion/react";
import Card from "@/components/card";
import Content from "@/components/content";

const main = Rubik_Glitch({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function Home() {
  return (
    <main>
      <Tagline line="TecTrix" />
      <Tagsub sub="Joran Hennion" />
      <Divider />
      <Content>
        <Card title="test" content="test" transparency={75} color="red" />
        <Card title="test" content="test" transparency={75} color="red" />
      </Content>
      <div
        id="fade"
        className="invisible fixed bottom-0 z-50 h-44 w-full bg-gradient-to-b from-transparent to-black md:visible"
      />
    </main>
  );
}

// bg-gradient-to-r from-red-700 to-blue-800 bg-clip-text
