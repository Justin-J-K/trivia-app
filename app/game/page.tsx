"use client"
import GameOverModal from "@/components/game-over-modal";
import Question from "@/components/question";
import Score from "@/components/score";
import React, { useEffect, useState } from "react";

export default function Game() {
    const [score, setScore] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);

    useEffect(() => {
        setGameEnded(false);
        setScore(0);
    }, [])

    const incrementScore = () => {
        setScore(score + 1)
    }

    const endGame = () => {
        setGameEnded(true);
    }

    return (
        <div>
            <Score score={score} isBest={false}/>
            <Question incrementScore={incrementScore} endGame={endGame}/>
            <GameOverModal open={gameEnded} score={score}/>
        </div>
    );
}