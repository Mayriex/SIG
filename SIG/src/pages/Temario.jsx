import React from 'react';
import { Descriptions, Divider } from 'antd';
import Menu from '../components/Menu';
import '../styles/Temario.css';

const Temario = () => {
    return (
        <><div className="temario">
            <Divider />
            <Descriptions title="Introducción a la Ciberseguridad" bordered>
                <Descriptions.Item label="Lección 1">Concepto de ciberseguridad</Descriptions.Item>
                <Descriptions.Item label="Lección 2">Importancia de la ciberseguridad para los niños</Descriptions.Item>
                <Descriptions.Item label="Lección 3">Términos básicos: privacidad, datos personales, y contraseñas</Descriptions.Item>
            </Descriptions>
            <Divider />
            
            <Descriptions title="Contraseñas y Privacidad" bordered>
                <Descriptions.Item label="Lección 1">Cómo crear y gestionar contraseñas seguras</Descriptions.Item>
                <Descriptions.Item label="Lección 2">Importancia de mantener las contraseñas en secreto</Descriptions.Item>
                <Descriptions.Item label="Lección 3">Configuración de privacidad en juegos y redes sociales</Descriptions.Item>
            </Descriptions>

            <Divider />
            <Descriptions title="Comportamiento Seguro en Línea" bordered>
                <Descriptions.Item label="Lección 1">Qué información personal no se debe compartir</Descriptions.Item>
                <Descriptions.Item label="Lección 2">Reconocer y evitar interacciones peligrosas en línea</Descriptions.Item>
                <Descriptions.Item label="Lección 3">Cómo utilizar configuraciones de seguridad en aplicaciones y sitios web</Descriptions.Item>
            </Descriptions>
            <Divider />
            
            <Descriptions title="Riesgos en Línea I" bordered>
                <Descriptions.Item label="Lección 1">Exposición a desconocidos en línea</Descriptions.Item>
                <Descriptions.Item label="Lección 2">Compartir información personal</Descriptions.Item>
                <Descriptions.Item label="Lección 3">Importancia de verificar la autenticidad de los mensajes</Descriptions.Item>
            </Descriptions>
            
            <Divider />
            <Descriptions title="Riesgos en Línea II" bordered>
                <Descriptions.Item label="Lección 1">Ciberacoso </Descriptions.Item>
                <Descriptions.Item label="Lección 2">Grooming</Descriptions.Item>
                <Descriptions.Item label="Lección 3">Contenido inapropiado</Descriptions.Item>
                <Descriptions.Item label="Lección 4">Phishing</Descriptions.Item>
            </Descriptions>
            <Divider />
        </div><Menu></Menu></>

      
    );
};

export default Temario;