import React, { useEffect } from "react";
import Score from "./score";
import { useRouter } from "next/navigation";

interface GameOverModalProps {
    open: boolean;
    score: number;
}

export default function GameOverModal({open, score}: GameOverModalProps) {
    const [name, setName] = React.useState("");
    const router = useRouter();

    const handleRestart = () => {
        localStorage.setItem("name", name);

        const bestScore = localStorage.getItem("bestScore");
        if (bestScore == null || score <= Number(bestScore)) {
            router.push("/");
            return;
        }

        localStorage.setItem("bestScore", score.toString());

        fetch("/api/add", {
            method: "PUT",
            body: JSON.stringify({ name, score }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .catch(error => {
            console.error("Error putting score:", error);
        });

        router.push("/");
    };

    useEffect(() => {
        const savedName = localStorage.getItem("name");
        if (savedName) {
            setName(savedName);
        }
    }, [])

    return (
        <>{open && <dialog className="fixed inset-0 bg-black bg-opacity-50 flex">
                <div className="bg-white p-8 rounded-lg flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-4">Game Over</h1>
                    <Score score={score} isBest={false} />
                    <div className="mt-4">
                        <input
                            type="text"
                            value={name}
                            onChange={event => setName(event.target.value)}
                            placeholder="Enter your name"
                            className="border border-gray-300 rounded px-4 py-2 mb-4"
                        />
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded"
                            onClick={handleRestart}
                        >
                            Restart
                        </button>
                    </div>
                </div>
            </dialog>
        }</>
    );
};