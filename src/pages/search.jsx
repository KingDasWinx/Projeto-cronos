import React, { useState } from "react";
import logocronos from '../assets/logo-cronos.png'
import logocronosbranca from '../assets/logo-cronos-branca.png'
import { LoadingOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";

function Search() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false); // Desativa o estado de carregamento após algum tempo (simulando uma transição)
    }, 1000);

    return (

        <div>

            {loading ? (
                <div className="search-pai" >
                    <img src={logocronos} alt="" />
                    <LoadingOutlined className="search-loading" />
                </div>
            ) : (
                <div className="search-pai2" >
                    <header class="header-main">
                        <div class="div-left">
                            <Link to="/" ><img class="img-logo" title="Logo Cronos" src={logocronos} alt="" /> </Link>
                        </div>

                        <div class="div-center">
                            <div class="input-container">
                                <ion-icon class="search-icon" name="search"></ion-icon>
                                <input class="input-searchProducts inpu" type="text" placeholder="Pesquisar Relógios..." />
                                <ion-icon class="filter-icon" name="filter"></ion-icon>
                            </div>
                        </div>

                        <div class="div-right">
                            <ion-icon name="bag"></ion-icon>
                            <ion-icon name="ellipsis-vertical"></ion-icon>
                            <button class="login-button">Acessar minha conta</button>
                        </div>
                    </header>
                    <header class="header-mobile">
                        <Link to="/" ><button className="search-button" ><ion-icon name="chevron-back"></ion-icon></button> </Link>
                        <div class="input-container-mobile" id="searchInput">
                            <ion-icon class="search-icon-mobile" name="search"></ion-icon>
                            <input class="input-searchProducts-mobile inpu" type="text" placeholder="Pesquisar Relógios..." />
                            <ion-icon class="filter-icon-mobile" name="filter"></ion-icon>
                        </div>
                        <button className="search-button" ><ion-icon name="bag"></ion-icon></button>
                    </header>
                </div>
            )}
        </div>
    )
}

export default Search;