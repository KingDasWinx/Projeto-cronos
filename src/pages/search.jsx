import React, { useState } from "react";
import logocronos from '../assets/logo-cronos.png'
import { LoadingOutlined } from '@ant-design/icons'
import { Link } from "react-router-dom";
import { Tooltip } from "@mui/material";
import { array } from "../script/array";


function Search() {
    const [loading, setLoading] = useState(true);


    const [busca, setBusca] = useState([])

    const lowerCase = busca.toString().toLowerCase();

    const achou = array.filter(array => array.title.toLowerCase().includes(lowerCase));


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
                <div className="bg" > 


                    <div className="search-pai2" >
                        <header class="header-main">
                            <div class="div-left">
                                <Tooltip title="Cronos" arrow>
                                    <Link to="/" ><img class="img-logo" title="Logo Cronos" src={logocronos} alt="" /> </Link>
                                </Tooltip>
                            </div>

                            <div class="div-center">
                                <div class="input-container">
                                    <Tooltip title="Pesquisa" arrow>
                                        <ion-icon class="search-icon" name="search"></ion-icon>
                                    </Tooltip>
                                    <input class="input-searchProducts inpu" value={busca} onChange={(ev) => setBusca(ev.target.value)} type="text" placeholder="Pesquisar Relógios..." />
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
                            <Link to="/" ><button className="search-button" ><ion-icon name="chevron-back"></ion-icon></button> </Link>
                            <div class="input-container-mobile" id="searchInput">
                                <ion-icon class="search-icon-mobile" name="search"></ion-icon>
                                <input class="input-searchProducts-mobile inpu" value={busca} onChange={(ev) => setBusca(ev.target.value)} type="text" placeholder="Pesquisar Relógios..." />
                                <ion-icon class="filter-icon-mobile" name="filter"></ion-icon>
                            </div>
                            <button className="search-button" ><ion-icon name="bag"></ion-icon></button>
                        </header>
                    </div>

                    <div className="container-cards" >
                        {achou.map(array => {
                            return (
                                <div key={array.id} className="card-main">
                                    <div className="rating-star">
                                        <ion-icon className="icones" name="star"></ion-icon>
                                        <p className="rating-value">{array.ava}</p>
                                    </div>

                                    <div className="container-images">
                                        <img className="img-view"  src={array.img} alt="" />
                                    </div>

                                    <ul className="color-selectors">
                                        <li className="color-dot --selected" style={{backgroundColor: array.cor1}} ></li>
                                        <li className="color-dot"style={{backgroundColor: array.cor2}}></li>
                                        <li className="color-dot"style={{backgroundColor: array.cor3}}></li>
                                    </ul>

                                    <h1 className="name-product">{array.title}</h1>

                                    <div className="container-foot">
                                        <div className="container-price">
                                            <p className="old-price">{array.oprice}</p>
                                            <p className="new-price">{array.nprice}</p>
                                        </div>
                                        <div className="cora"></div>
                                    </div>

                                    <Link to={`/compra/${array.id}`}>
                                        {" "}
                                        <button className="buy-button bu"></button>{" "}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search;