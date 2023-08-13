import React, { useState } from 'react';
import "../style/header.css";
import logocronos from '../assets/logo-cronos.png'
import logocronosbranca from '../assets/logo-cronos-branca.png'
import Tooltip from '@mui/material/Tooltip';
import { LoadingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

function Header() {
    const [loading, setLoading] = useState(true);
 
    setTimeout(() => {
        setLoading(false); // Desativa o estado de carregamento após algum tempo (simulando uma transição)
    }, 500);

    return (
        <div>
            {loading ? (
                <div className="search-pai" >
                    <img src={logocronos} alt="" />
                    <LoadingOutlined className="search-loading" />
                </div>
            ) : (
                <div className='boy' >
                    <header className="header-main">
                        <div className="div-left">
                            <Link to="/" ><img className="img-logo" title="Logo Cronos" src={logocronos} alt="" /> </Link>
                        </div>

                        <div className="div-center">
                            <div className="input-container">
                                <ion-icon className="search-icon" name="search"></ion-icon>
                                <input onClick={() => { window.location.href = '/search'; }} className="input-searchProducts inpu" type="text" placeholder="Pesquisar Relógios..." />
                                <ion-icon className="filter-icon" name="filter"></ion-icon>
                            </div>
                        </div>

                        <div className="div-right">
                            <ion-icon name="bag"></ion-icon>
                            <ion-icon name="ellipsis-vertical"></ion-icon>
                            <button className="login-button">Acessar minha conta</button>
                        </div>
                    </header>

                    <header className="header-mobile">
                        <ion-icon name="bag" id="bagIcon"></ion-icon>
                        <Link to="/"> <img className="img-logo-mobile" id="logoImg" title="Logo Cronos" src={logocronosbranca} alt="" /> </Link>
                        <Link to="/search"> <ion-icon id="searchIcon" name="search"></ion-icon> </Link>
                    </header>
                </div>
            )}
        </div>
    );
}

export default Header;