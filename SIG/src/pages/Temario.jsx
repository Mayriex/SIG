import React from 'react';
import { Descriptions, Divider } from 'antd';

const Temario = () => {
    return (
        <div className="temario-container">

            <Divider />
                <h4>Firewall</h4>
                <Descriptions title="Contenido Módulo" bordered>
                <Descriptions.Item label="Lección 1">Introducción al Firewall</Descriptions.Item>
                <Descriptions.Item label="Lección 2">Configuración Básica</Descriptions.Item>
                <Descriptions.Item label="Lección 3">Reglas de Acceso</Descriptions.Item>
                <Descriptions.Item label="Lección 4">Seguridad Avanzada</Descriptions.Item>
                <Descriptions.Item label="Lección 5">Casos Prácticos</Descriptions.Item>
            </Descriptions>
        </div>
    );
};

export default Temario;