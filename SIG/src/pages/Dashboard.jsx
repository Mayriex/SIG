import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';
import { Progress, Flex } from 'antd';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Menu from '../components/Menu';
import { API_URL } from './constants';

function Dashboard() {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_URL}/modulos`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setModules(response.data);

        // Obtener o inicializar el progreso desde localStorage
        let progress = JSON.parse(localStorage.getItem('progress')) || {};

        // Actualizar el progreso con los IDs de los módulos obtenidos
        response.data.forEach(modulo => {
          if (!progress[modulo.id]) {
            progress[modulo.id] = { percent: 0 };
          }
        });

        // Guardar el progreso actualizado en localStorage
        localStorage.setItem('progress', JSON.stringify(progress));
      } catch (error) {
        console.error('Error al obtener los módulos:', error);
      }
    };

    fetchModules();
  }, []);

  return (
    <>
      <div className='dashboard'>
        <div>
          <h4>Avance Módulos </h4>
          <Progress percent={30} steps={5} />
          <h4>Avance Lecciones </h4>
          <Progress percent={10} steps={5} />
        </div>
        <div className='circle-progress'>
          <h4>Avance Total</h4>
          <Flex wrap gap="middle">
            <Progress
              type="circle"
              steps={8}
              percent={50}
              trailColor="rgba(0, 0, 0, 0.06)"
              strokeWidth={20} />
          </Flex>
        </div>
      </div>

      <div className="modulos">
        <h4>Módulos</h4>
        <div className='cards'>
          {modules.map((modulo) => (
            <NavLink key={modulo.id} to={`/module/${modulo.id}`} className='card'>
              <img src={modulo.imagen} alt={modulo.nombre} />
              <div className='card-content'>
                <Flex gap="small" vertical>
                  <Progress percent={50} steps={5} />
                </Flex>
                <h4>{modulo.nombre}</h4>
                <p>{modulo.descripcion}</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      <Menu />
    </>
  );
}

export default Dashboard;
