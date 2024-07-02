import React from 'react'; 
import '../styles/Sign.css'
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import { Tabs } from 'antd';


function Sign() {
    const { TabPane } = Tabs;
  
    return (
      <div className="sign-container">
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Iniciar Sesión" key="1">
            <div className='home'>
              <h3>Bienvenido de vuelta</h3>
              <p>Accede a tu cuenta para explorar nuestro contenido educativo sobre ciberseguridad.</p>
              <Form name="login-form" layout="vertical">
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
  