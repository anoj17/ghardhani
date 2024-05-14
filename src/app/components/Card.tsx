"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { FaArrowRight } from "react-icons/fa";


export default function CardDirection() {
  const imageUrl =
    "https://images.unsplash.com/photo-1663765970236-f2acfde22237?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Baneshwor</p>
        <p className="font-normal text-sm">1 room available at groundFloor</p>
        <button className='text-white justify-center group flex items-center text-[14px] font-bold'>view Details
                    <FaArrowRight size={10} className='text-blue group-hover:ml-[2px] transition-all duration-200 items-center'/>
                    </button>
      </DirectionAwareHover>
    </div>
  );
}
