import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './constants';

function Verify() {
    const navigate = useNavigate();
    const [digit1, setDigit1] = useState('');
    const [digit2, setDigit2] = useState('');
    const [digit3, setDigit3] = useState('');
    const [digit4, setDigit4] = useState('');
    console.log(API_URL);

    const handleVerify = async (values) => {
        try {
            const token_2FA = `${values.digit1}${values.digit2}${values.digit3}${values.digit4}`;
            const response = await axios.post(`${API_URL}/verify-2fa`, {
                correo: localStorage.getItem('correo'),
                token_2FA,
            });
            if (response.status === 200) {
                const { token } = response.data;
                localStorage.setItem('token', token);
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error en la verificación en dos pasos:', error);
            // Manejar errores, mostrar mensajes al usuario, etc.
        }
    };

    const handlePaste = (event) => {
        const pasteData = event.clipboardData.getData('text');
        if (pasteData.length === 4) {
            event.preventDefault();
            const digits = pasteData.split('');
            setDigit1(digits[0]);
            setDigit2(digits[1]);
            setDigit3(digits[2]);
            setDigit4(digits[3]);
        }
    };

    return (
        <div className="verify-container">
            <h3>Verificación en dos pasos</h3>
            <p>Introduce el código de verificación que has recibido.</p>
            <Form name="verify-form" layout="vertical" onFinish={handleVerify}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Form.Item name="digit1" rules={[{ required: true, message: 'Ingresa el dígito' }]} style={{ flex: 1 }}>
                        <Input maxLength={1} value={digit1} onChange={(e) => setDigit1(e.target.value)} onPaste={handlePaste} />
                    </Form.Item>
                    <Form.Item name="digit2" rules={[{ required: true, message: 'Ingresa el dígito' }]} style={{ flex: 1 }}>
                        <Input maxLength={1} value={digit2} onChange={(e) => setDigit2(e.target.value)} />
                    </Form.Item>
                    <Form.Item name="digit3" rules={[{ required: true, message: 'Ingresa el dígito' }]} style={{ flex: 1 }}>
                        <Input maxLength={1} value={digit3} onChange={(e) => setDigit3(e.target.value)} />
                    </Form.Item>
                    <Form.Item name="digit4" rules={[{ required: true, message: 'Ingresa el dígito' }]} style={{ flex: 1 }}>
                        <Input maxLength={1} value={digit4} onChange={(e) => setDigit4(e.target.value)} />
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Verificar</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Verify;
