import "../style/sub-header.css";
import { Link } from 'react-router-dom';

function SubHeader() {
    return (
        <div class="sub-header-global-compra-direta">
            <Link to="/" ><button class="btn-voltar btn-global-padrao"><ion-icon class="back" name="chevron-back"></ion-icon></button> </Link>
            <p class="product-name">Rilógio Ismart Uati P30</p>
            <div class="area-infoscompra-header">
                <p class="product-price">Modelo à partir de R$<span class="product-price product-price-color">4.299</span> à
                    R$<span class="product-price product-price-color">7.499</span></p>
                <button class="btn-compraragora btn-global-padrao">
                    <p class="buy-now">Comprar agora!</p>
                </button>
            </div>
        </div>
    )
}

export default SubHeader;