import React from 'react';

interface ScoreProps {
    score: number;
    isBest: boolean;
}

export default function Score({ score, isBest }: ScoreProps) {
    return (
        <div className="flex justify-center items-center flex-col">
            <p className="text-xl font-bold">{isBest && "Best "}Score</p>
            <p className="text-5xl">{score}</p>
        </div>
    );
}