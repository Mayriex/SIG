import React from 'react';
import '../styles/Sign.css';
import { Button, Form, Input, Tabs } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Sign() {
  const { TabPane } = Tabs;
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        correo: values.email,
        password: values.password,
      });
      if (response.status === 200) {
        console.log(values.email);
        localStorage.setItem('correo', values.email); // Guarda el correo en el almacenamiento local para verificar
        navigate('/verify'); // Redirige al usuario a la página de verificación
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejar errores, mostrar mensajes al usuario, etc.
    }
  };

  return (
    <div className="sign-container">
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Iniciar Sesión" key="1">
          <div className='home'>
            <h3>Bienvenido de vuelta</h3>
            <p>Accede a tu cuenta para explorar nuestro contenido educativo sobre ciberseguridad.</p>
            <Form name="login-form" layout="vertical" onFinish={handleLogin}>
              <Form.Item
                label="Correo"
                name="email"
                rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Contraseña"
                name="password"
                rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Iniciar Sesión</Button>
              </Form.Item>
            </Form>
          </div>
        </TabPane>
        <TabPane tab="Registrarse" key="2">
          <div className='home'>
            <h3>Formulario de registro</h3>
            <p>Únete a nuestra comunidad de aprendizaje sobre ciberseguridad.</p>
            <Form name="register-form" layout="vertical">
              <Form.Item
                label="Usuario"
                name="name"
                rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Correo"
                name="email"
                rules={[{ required: true, message: 'Por favor ingresa tu correo' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Contraseña"
                name="password"
                rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button type="primary" href='/dashboard'>Registrarse</Button>
              </Form.Item>
            </Form>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default Sign;
