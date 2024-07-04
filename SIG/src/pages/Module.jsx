import React, { useEffect, useState } from 'react';
import '../styles/Module.css'; // Estilo específico para Module
import { Progress } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu';
import { API_URL } from './constants';

function Module() {
    const { moduleId } = useParams();
    const [module, setModule] = useState(null);
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const fetchModule = async () => {
            try {
                const token = localStorage.getItem('token');
                const moduleResponse = await axios.get(`${API_URL}/modulos/${moduleId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setModule(moduleResponse.data);

                const pagesResponse = await axios.get(`${API_URL}/modulos/${moduleId}/paginas`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setPages(pagesResponse.data);
            } catch (error) {
                console.error('Error al obtener el módulo y las páginas:', error);
            }
        };

        fetchModule();
    }, [moduleId]);

    if (!module) {
        return <div>Cargando...</div>;
    }

    return (
        <>
            <div className="info-modulo">
                <div className="info-header">
                    <img className="module-image" src={module.imagen} alt={module.nombre} />
                </div>

                <div className="dashboard">
                    <div>
                        <h2 className="module-title">{module.nombre}</h2>
                        <h4>Avance</h4>
                        <Progress percent={30} steps={5} />
                        <p>{module.descripcion}</p>
                    </div>
                </div>

                <div className="modulos">
                    <h4>Páginas del Módulo</h4>
                    <div className="cards">
                        {pages.map((pagina) => (
                            <div key={pagina.id} className="card">
                                <div className="card-content">
                                    <div className="card-title-container"> {/* Contenedor para alinear el título y el icono */}
                                        <h4>{pagina.nombre}</h4>
                                        <img src="/icons/ninja-weapon.svg" alt="Ninja Weapon" className="card-check" />
                                    </div>
                                    <p>{pagina.descripcion}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <Menu />
        </>
    );
}

export default Module;
