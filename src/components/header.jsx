import React from 'react';
import "../style/header.css";
import logocronos from '../assets/logo-cronos.png'
import Tooltip from '@mui/material/Tooltip';

function Header() {
    return (
        <header class="header-global-padro">
            <div>
                <Tooltip title="Sla">
                    <img class="image-removebg-preview-3" src={logocronos} alt="" />
                </Tooltip>
            </div>
            <div class="area-pesquisar">
                <div class="lupa-icon">
                    <ion-icon class="lupa-icon" name="search"></ion-icon>
                </div>
                <div class="rectangle-22">
                </div>
                <input class="pesquisar-relgios" placeholder="Pesquisar Relógios" type="text" />
                <div class="rectangle-23">
                </div>
                <div class="filter-outline-1">
                    <div>
                        <svg class="vector" xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 23 15"
                            fill="none">
                            <path d="M1.5 1.25H21.5M1.5 7.5H14.3571M1.5 13.75H5.78571" stroke="#343434" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="frame-181">
                <div class="frame-180">
                    <div class="frame-130">
                        <ion-icon class="bag" name="bag"></ion-icon>
                        <div class="frame-198 ">
                            <span class="t">4</span>
                        </div>
                    </div>
                    <div class="frame-99">
                        <div class="btn-painelde-configurao">
                            <div class="menu-vertical">
                                <ion-icon class="menu-vertical" name="ellipsis-vertical"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="component-7">
                    <span class="acessar-minha-conta">Acessar minha conta</span>
                    <div class="external-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 16 17" fill="none">
                            <path
                                d="M3.33333 2.5C2.60462 2.5 2 3.10462 2 3.83333V13.1667C2 13.8954 2.60462 14.5 3.33333 14.5H12.6667C13.3954 14.5 14 13.8954 14 13.1667V8.5H12.6667V13.1667H3.33333V3.83333H8V2.5H3.33333ZM9.33333 2.5V3.83333H11.724L5.52865 10.0286L6.47135 10.9714L12.6667 4.77604V7.16667H14V2.5H9.33333Z"
                                fill="#E0DCEB" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;