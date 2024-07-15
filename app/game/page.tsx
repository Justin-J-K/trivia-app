"use client"
import Question from '@/components/question';
import Score from '@/components/score';
import React, { useState } from 'react';

export default function Game() {
    const [score, setScore] = useState(0);

    const incrementScore = () => {
        setScore(score + 1)
    }

    const endGame = () => {

    }

    return (
        <main>
            <Score score={score} isBest={false}/>
            <Question incrementScore={incrementScore} endGame={endGame}/>
        </main>
    );
}