import React from 'react'
import "../Header/Header.css"
// Importa a logo
import senaiLogo from "../img/senai.png";
import { Link } from 'react-router-dom';

const Header = ({texto}) => {
  return (
    // Div com todas as informações do header
        <div className="header">
          {/* Foto da logo */}
        <Link to={"/carometro/home"} className='img_header'>
        <img src={senaiLogo} alt="Senai" className='logoHome' />
        <p className='tituloHome'>{texto} </p>
        </Link>

        </div>
  )
}

export default Header
