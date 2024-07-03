import React from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/Quiz.css';
import Menu from '../components/Menu';

function Quiz() {
    const navigate = useNavigate();

    const handleStartQuiz = () => {
        navigate('/preguntas-quiz');
    };

    return (
        <>
            <div className="quiz-container">
                <h2>Titulo del Quiz</h2>

                <div className="descripcion">
                    <ul>
                        <li><label>Usuario: User23</label></li>
                        <li><label>Duracion del quiz: 10 min</label></li>
                        <li><label>Preguntas: 15</label></li>
                    </ul>
                </div>

                <button className="btnIniciar" type="button" onClick={handleStartQuiz}>Iniciar Quiz</button>
            </div>
            <Menu></Menu>
        </>
    );
}

export default Quiz;
