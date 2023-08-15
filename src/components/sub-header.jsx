import "../style/sub-header.css";
import { Link } from 'react-router-dom';
import { array } from "../script/array";
import { useParams } from "react-router-dom";

function SubHeader() {
    const { id } = useParams()
    
    const nameProduct = array[id].title
    const priceProduct = array[id].nprice

    return (
        <div class="container-subHeader">
            <Link to="/" ><button class="btn-voltar"><ion-icon class="back" name="chevron-back"></ion-icon></button> </Link>
            <p class="product-name">{nameProduct}</p>

            <div class="container-price">
                <p>Modelo à partir de: <span class="product-price">{priceProduct}</span></p>
                <button class="btn-compraragora">Comprar agora!</button>
            </div>
        </div>
    )
}

export default SubHeader;