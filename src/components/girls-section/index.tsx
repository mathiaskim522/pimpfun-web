"use client";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export function GirlsSection() {
  const listRef = React.useRef<HTMLUListElement>(null);
  const agents = [
    {
      id: "alice",
      name: "Alice",
    },
    {
      id: "xena",
      name: "Xena",
    },
    {
      id: "eliza",
      name: "Eliza",
    },
    {
      id: "maho",
      name: "Maho",
    },
    {
      id: "rani",
      name: "Rani - The Dragon Lord",
    },
    {
      id: "receptionist",
      name: "Receptionist",
    },
    {
      id: "olivia",
      name: "Olivia",
    },
    {
      id: "karly",
      name: "Karly",
    },
    {
      id: "mikanko",
      name: "Mikanko",
    },
    {
      id: "sena",
      name: "Sena",
    },
    {
      id: "kanata",
      name: "Kanata",
    },
    {
      id: "sophia",
      name: "Sophia",
    },
    {
      id: "usamama",
      name: "Usamama",
    },
  ];

  return (
    <div className="space-y-10">
      <h1 className="text-4xl text-white font-black header-text-border px-8 pt-8 pb-0">
        AGENTS
      </h1>

      <div className="relative px-8 pb-8">
        <div className="absolute z-10 left-0 top-0 h-full w-14 bg-gradient-to-r from-white/100 via-60% via-white/100 to-white/0"></div>
        <ul
          ref={listRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {agents.map((agent, index) => (
            <li
              key={agent.id}
              className={clsx([
                "flex flex-col items-center gap-4 shrink-0 snap-center sm:snap-start relative",
                index === 0 && "pl-10 lg:pl-0",
                index === agents.length - 1 && "mr-10",
              ])}
            >
              <div
                className="
                rounded-tl-3xl rounded-tr-[28px] rounded-bl-[120px] rounded-br-3xl overflow-hidden relative"
              >
                <Image
                  src={`/girls/${agent.id}.jpg`}
                  width={200}
                  height={200}
                  alt={agent.name}
                />
              </div>
              <span className="text-xl font-bold header-text-border text-white">
                {agent.name}
              </span>
              <span className="w-14 p-1.5 bg-gradient-to-br from-purple-950 to-purple-500 rounded-full aspect-square flex justify-center items-center font-bold absolute top-0 right-0 text-white flex-col">
                <span className="leading-none">2M</span>
                <small className="text-xs font-light">HIT</small>
              </span>
            </li>
          ))}
        </ul>
        <div className="absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-white/100 via-60% via-white/100 to-white/0"></div>
      </div>
    </div>
  );
}
