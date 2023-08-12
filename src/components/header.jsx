import "../style/header.css"

export default function Header() {
    return(
        <div>
            <header className="header-main">
                <div className="div-left">
                    <img className="img-logo" src="../assets/logo-cronos.png" alt="" />  
                </div>

                <div className="div-center">
                    <ion-icon id="search-icon" name="search"></ion-icon>
                    <div className="container-search">
                        <ion-icon name="search"></ion-icon>
                        <span className="bar"></span>
                        <input className="input-searchProducts" type="text" placeholder="Pesquisar Relógios" />
                        <span className="bar"></span>
                        <ion-icon className="filter-icon" name="filter"></ion-icon>
                    </div>
                </div>
                
                <div className="div-right">
                    <ion-icon name="bag"></ion-icon>
                    <ion-icon name="ellipsis-vertical"></ion-icon>
                    <button className="login-button">Acessar minha conta</button>

                </div>
            </header>
        </div>
    );
}

const searchMobile = document.getElementById("search-icon");

searchMobile.addEventListener('click', ()=>{
    searchMobile.classList.toggle('--inputActive')
})

