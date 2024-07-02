import React from 'react';
import { Descriptions, Divider } from 'antd';
import Menu from '../components/Menu';
import '../styles/Temario.css';

const Temario = () => {
    return (
        <><div className='course-content'>
        <div className='lesson'>
          <h3>Introducción a la Ciberseguridad</h3>
          <ul>
            <li><strong>Lección 1:</strong> Concepto de ciberseguridad</li>
            <li><strong>Lección 2:</strong> Importancia de la ciberseguridad</li>
            <li><strong>Lección 3:</strong> Términos básicos</li>
          </ul>
        </div>
        <Divider />
  
        <div className='lesson'>
          <h3>Contraseñas y Privacidad</h3>
          <ul>
            <li><strong>Lección 1:</strong> Cómo crear y gestionar contraseñas</li>
            <li><strong>Lección 2:</strong> Importancia de mantener las contraseñas en secreto</li>
            <li><strong>Lección 3:</strong> Configuración de privacidad en juegos y redes sociales</li>
          </ul>
        </div>
        <Divider />
  
        <div className='lesson'>
          <h3>Comportamiento Seguro en Línea</h3>
          <ul>
            <li><strong>Lección 1:</strong> Qué información personal no se debe compartir</li>
            <li><strong>Lección 2:</strong> Reconocer y evitar interacciones peligrosas en línea</li>
            <li><strong>Lección 3:</strong> Cómo utilizar configuraciones de seguridad en aplicaciones y sitios web</li>
          </ul>
        </div>
        <Divider />
  
        <div className='lesson'>
          <h3>Riesgos en Línea I</h3>
          <ul>
            <li><strong>Lección 1:</strong> Exposición a desconocidos en línea</li>
            <li><strong>Lección 2:</strong> Compartir información personal</li>
            <li><strong>Lección 3:</strong> Importancia de verificar la autenticidad de los mensajes</li>
          </ul>
        </div>
        <Divider />
  
        <div className='lesson'>
          <h3>Riesgos en Línea II</h3>
          <ul>
            <li><strong>Lección 1:</strong> Ciberacoso</li>
            <li><strong>Lección 2:</strong> Grooming</li>
            <li><strong>Lección 3:</strong> Contenido inapropiado</li>
            <li><strong>Lección 4:</strong> Phishing</li>
          </ul>
        </div>
        <Divider />
      </div>
  <Menu></Menu></>

      
    );
};

export default Temario;