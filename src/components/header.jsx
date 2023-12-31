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
                    <header class="header-main">
                        <div class="div-left">
                            <Tooltip title="Cronos" arrow>
                                <Link to="/" ><img class="img-logo" src={logocronos} alt="" /> </Link>
                            </Tooltip>
                        </div>

                        <div class="div-center">
                            <div class="input-container">
                                <Tooltip title="Pesquisar" arrow>
                                    <ion-icon class="search-icon" name="search"></ion-icon>
                                </Tooltip>
                                <input onClick={() => { window.location.href = '/search'; }} class="input-searchProducts inpu" type="text" placeholder="Pesquisar Relógios..." />
                                <Tooltip title="Filtro" arrow>
                                    <ion-icon class="filter-icon" name="filter"></ion-icon>
                                </Tooltip>
                            </div>
                        </div>

                        <div class="div-right">
                            <Tooltip title="Sacola" arrow>
                                <ion-icon name="bag"></ion-icon>
                            </Tooltip>
                            <Tooltip title="Menu" arrow>
                                <ion-icon name="ellipsis-vertical"></ion-icon>
                            </Tooltip>
                            <button class="login-button">Acessar minha conta</button>
                        </div>
                    </header>

                    <header class="header-mobile">
                        <ion-icon name="bag" id="bagIcon"></ion-icon>
                        <Link to="/"> <img class="img-logo-mobile" id="logoImg" title="Logo Cronos" src={logocronosbranca} alt="" /> </Link>
                        <Link to="/search"> <ion-icon id="searchIcon" name="search"></ion-icon> </Link>
                    </header>
                </div>
            )}
        </div>
    );
}


export default Header;