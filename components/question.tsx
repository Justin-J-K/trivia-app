import React, { useEffect, useState } from 'react';

type QuestionProps = {
    incrementScore: () => void;
    endGame: () => void;
};

export default function Question({ incrementScore, endGame }: QuestionProps) {
    const [gameEnded, setGameEnded] = useState(false);
    const [questions, setQuestions] = useState<any>();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [question, setQuestion] = useState('');
    const [answered, setAnswered] = useState(false);

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleAnswer = (selectedAnswer: boolean) => {
        setAnswered(true);

        if (selectedAnswer == (questions[currentQuestion].correct_answer === "True")) {
            incrementScore();
        } else {
            endGame();
            setGameEnded(true);
            return;
        }

        nextQuestion()
    };

    const fetchQuestions = async () => {
        try {
            const response = await fetch('https://opentdb.com/api.php?amount=25&type=boolean');
            const data = await response.json();
            setQuestions(data.results);
            setCurrentQuestion(0);
            setQuestion(data.results[0].question);
        } catch (error) {
            console.error('Error fetching question:', error);
        }
    };

    const nextQuestion = () => {
        if (currentQuestion >= 24) {
            fetchQuestions();
        } else {
            setCurrentQuestion(currentQuestion + 1);
            setQuestion(questions[currentQuestion + 1].question);
        }
        setAnswered(false);
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <p>{question}</p>
            <div className="flex justify-center gap-4">
                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer(true)} disabled={gameEnded || answered}>True</button>
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleAnswer(false)} disabled={gameEnded || answered}>False</button>
            </div>
        </div>
    );
}

