import "../style/sub-header.css";
import { Link } from 'react-router-dom';
import { array } from "../script/array";
import { useParams } from "react-router-dom";

function SubHeader() {

    const { id } = useParams()
    const productId = parseInt(id);
    const product = array.find(product => product.id === productId)

    return (
        <div key={product.id} class="container-subHeader">
            <Link to="/" ><button class="btn-voltar"><ion-icon class="back" name="chevron-back"></ion-icon></button> </Link>
            <p class="product-name">{product.title}</p>

            <div class="container-price">
                <p className="produdu" >Modelo à partir de: <span class="product-price">{product.nprice}</span></p>
                <button class="btn-compraragora">Comprar agora!</button>
            </div>
        </div>
    )
}

export default SubHeader;
