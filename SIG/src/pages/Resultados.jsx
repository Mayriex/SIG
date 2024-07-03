import React from "react";
import { useLocation } from 'react-router-dom';
import '../styles/Resultados.css';
import Menu from '../components/Menu';

function Resultados(){
    const location = useLocation();
    const { values, correctAnswers } = location.state;

    const calculateScore = () => {
        let score = 0;
        for (let question in correctAnswers) {
            if (values[question] === correctAnswers[question]) {
                score++;
            }
        }
        return score;
    };

    const totalQuestions = Object.keys(correctAnswers).length;
    const score = calculateScore();

    return (
        <>
        <div className="results">
            <h1>Quiz Resultados</h1>
            <p>Your score: {score} / {totalQuestions}</p>
            <div className="answers">
                {Object.keys(values).map((question, index) => (
                    <div key={index} className="answer">
                        <p>{`Question ${index + 1}`}</p>
                        <p>Your answer: {values[question]}</p>
                        <p>Correct answer: {correctAnswers[question]}</p>
                    </div>
                ))}
            </div>
        </div>
        <Menu></Menu>
        </>
    );
};



export default Resultados;