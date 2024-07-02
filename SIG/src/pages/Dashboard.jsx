import React from 'react'; 
import '../styles/Dashboard.css'
import { Button } from 'antd';
import { Flex, Progress, Slider, Typography } from 'antd';
import { Card } from 'antd';
import Firewall from '../assets/firewall.png';
import Menu from '../components/Menu';
import { Link } from 'react-router-dom'; // Importar Link desde React Router
import { NavLink } from 'react-router-dom';

function Dashboard() {
  const { Meta } = Card;
    const [stepsCount, setStepsCount] = React.useState(5);
    const [stepsGap, setStepsGap] = React.useState(7);
    return (
      <><><div className='dashboard'>
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

          <NavLink to="/profile" className='card-firewall'>
              <img src={Firewall} alt="Logo" style={{ width: '100px', height: '100px' }} />
              <Flex gap="small" vertical>
                <Progress percent={50} steps={5} />
              </Flex>
              <h4>Firewall</h4>
              <p>4 Lecciones</p>
            </NavLink>

            <NavLink to="/profile" className='card'>
            <img src={Firewall} alt="Logo" style={{ width: '100px', height: '100px' }} />
              <Flex gap="small" vertical>
                <Progress percent={50} steps={5} />
              </Flex>
              <h4>Firewall</h4>
              <p>6 Lecciones</p>
            </NavLink>

          </div>

          <div className='cards'>
          <NavLink to="/profile" className='card-3'>
            <img src={Firewall} alt="Logo" style={{ width: '100px', height: '100px' }} />
            <Flex gap="small" vertical>
              <Progress percent={50} steps={5} />
            </Flex>
            <h4>Firewall</h4>
            <p>5 Lecciones</p>
          </NavLink>

         <NavLink to="/profile" className='card-4'>
            <img src={Firewall} alt="Logo" style={{ width: '100px', height: '100px' }} />
            <Flex gap="small" vertical>
              <Progress percent={50} steps={5} />
            </Flex>
            <h4>Firewall</h4>
            <p>3 Lecciones</p>
          </NavLink>
          </div>

      </div>
        </><Menu></Menu></>
    );
}

export default Dashboard;
