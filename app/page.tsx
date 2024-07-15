"use client"
import Score from "@/components/score";
import Scoreboard from "@/components/scoreboard";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [bestScore, setBestScore] = useState(0)

  useEffect(() => {
    const savedBestScore = localStorage.getItem("bestScore");
    if (savedBestScore) {
      setBestScore(Number(savedBestScore));
    }
  }, []);

  return (
    <main>
      <Score score={bestScore} isBest={true} />
      <Link href={"/game"}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Start Game
        </button>
      </Link>
      <Scoreboard />
    </main>
  );
}
