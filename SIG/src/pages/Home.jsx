import React from 'react'; 
import '../styles/Home.css'
import { Button } from 'antd';

function Home() {
 return (
        <><div className='home'>
         <h3>Ciberseguridad para Todos</h3>
         <p>Aprende de manera fácil y divertida cómo mantenerte seguro en línea y proteger tus datos personales. Nuestros cursos interactivos y actividades están diseñados para todas las edades y niveles de experiencia. ¡Únete a nuestra comunidad hoy mismo y fortalece tu seguridad digital!</p>
     </div><div className='end'>
             <Button type="primary" href="/sign">Iniciar</Button>
         </div></>
 );
}
export default Home;