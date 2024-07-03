import React, { useState } from "react";
import { Radio, Space, Button, Mentions } from 'antd';
import { useNavigate } from 'react-router-dom';
import '../styles/PreguntasQuiz.css';
import Menu from '../components/Menu';

const correctAnswers = {
    q1: 1,
    q2: 2,
    q3: 3,
    q4: 4,
    q5: 1,
    q6: 2,
    q7: 3,
    q8: 4,
};

function PreguntasQuiz() {
    const [values, setValues] = useState({
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,
        q6: null,
        q7: null,
        q8: null,
    });

    const navigate = useNavigate();

    const onChange = (question, value) => {
        setValues({
            ...values,
            [question]: value
        });
    };

    const handleSubmit = () => {
        navigate('/resultados', { state: { values, correctAnswers } });
    };

    return (
        <>
            <div className="cuestionario">
                <div className="preguntas">
                    <label>¿Qué es OWASP y cuál es su objetivo principal?</label>
                    <Radio.Group onChange={(e) => onChange('q1', e.target.value)} value={values.q1}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                            <Radio value={4}>Option D</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className="preguntas">
                    <label>¿Cuáles son las 10 principales amenazas de seguridad en aplicaciones web según OWASP?</label>
                    <Radio.Group onChange={(e) => onChange('q2', e.target.value)} value={values.q2}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                            <Radio value={4}>Option D</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className="preguntas">
                    <label>¿Pregunta 3?</label>
                    <Radio.Group onChange={(e) => onChange('q3', e.target.value)} value={values.q3}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                            <Radio value={4}>Option D</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className="preguntas">
                    <label>¿Pregunta 4?</label>
                    <Radio.Group onChange={(e) => onChange('q4', e.target.value)} value={values.q4}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                            <Radio value={4}>Option D</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className="preguntas">
                    <label>¿Pregunta 5?</label>
                    <Radio.Group onChange={(e) => onChange('q5', e.target.value)} value={values.q5}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                            <Radio value={4}>Option D</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className="preguntas">
                    <label>¿Pregunta 6?</label>
                    <Radio.Group onChange={(e) => onChange('q6', e.target.value)} value={values.q6}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                            <Radio value={4}>Option D</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className="preguntas">
                    <label>¿Pregunta 7?</label>
                    <Radio.Group onChange={(e) => onChange('q7', e.target.value)} value={values.q7}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                            <Radio value={4}>Option D</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <div className="preguntas">
                    <label>¿Pregunta 8?</label>
                    <Radio.Group onChange={(e) => onChange('q8', e.target.value)} value={values.q8}>
                        <Space direction="vertical">
                            <Radio value={1}>Option A</Radio>
                            <Radio value={2}>Option B</Radio>
                            <Radio value={3}>Option C</Radio>
                            <Radio value={4}>Option D</Radio>
                        </Space>
                    </Radio.Group>
                </div>
                <Button type="primary" onClick={handleSubmit}>Submit</Button>
            </div>
            <Menu className='menu'></Menu>
        </>
    );
};

export default PreguntasQuiz;
