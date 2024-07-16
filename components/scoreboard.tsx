import React, { useEffect, useState } from "react";

interface Score {
    name: string;
    score: number;
}

export default function Scoreboard() {
    const [scores, setScores] = useState<Score[]>([]);

    useEffect(() => {
        fetch("/api/top")
            .then(response => response.json())
            .then(data => setScores(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold text-center">Top 10 Players</h2>
            <div className="flex flex-col">
                {scores.map((score, index) => (
                    <div key={index} className="flex justify-between">
                        <p className="font-semibold">{score.name}</p>
                        <p className="text-gray-500">{score.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
