import React, { useEffect, useState } from 'react';

interface Score {
    name: string;
    score: number;
}

export default function Scoreboard() {
    const [scores, setScores] = useState<Score[]>([]);

    useEffect(() => {
        // fetch('/api/top')
        //     .then(response => response.json())
        //     .then(data => setScores(data))
        //     .catch(error => console.error(error));
        setScores([
            { name: "John", score: 100 },
            { name: "Jane", score: 90 },
            { name: "Mike", score: 80 },
        ]);
    }, []);

    return (
        <div>
            <h2>Top 10 Players</h2>
            <div>
                {scores.map((score, index) => (
                    <div key={index}>
                        <p>{score.name}</p>
                        <p>{score.score}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
