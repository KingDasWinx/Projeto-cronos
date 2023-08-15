import { useParams } from "react-router-dom";
import { array } from "../script/array";
import "../style/infos-compra.css";
import Heart from "../components/coracao"

function InfosCompra() {

  const { id } = useParams()
  const productId = parseInt(id);
  const product = array.find(product => product.id === productId)

  const price_1 = `${product.nprice}` / 12

  const price_12 = price_1.toFixed(2);

  return (
    <div className="pxx" >
      <div key={product.id} class="personalizacao-dos-produtos">
        <div class="relogio">
          <Heart />
          <span class="escrita-rologio">{product.title}</span>
          <div class="frame-399">
            <span class="estoque">Estoque:</span>
            <span class="disponibilidade">{product.dis} Disponíveis</span>
          </div>
        </div>
        <div class="frame-271">
          <div class="preco-pai">
            <span class="a-partir-de">A partir de</span>
            <span class="preco1">R${product.nprice}</span>
          </div>
          <div class="stars">
            <span class="avaliation">{product.ava}</span>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
            <span class="number-avaliation">({product.dis})</span>
          </div>
        </div>
        <div class="frame-255">
          <div class="personalizacao-pai">
            <span class="personalizacao">Personalização:</span>
          </div>

          <div class="corzinha-pai">
            <div class="cor-caixa">
              <span class="corzinha">Cor:</span>
              <span class="dark2">Dark Black</span>
            </div>
            <div class="bolinha-pai">
              <ul className="color-selectors">
                <li className="color-dot --selected" style={{ backgroundColor: product.cor1 }} ></li>
                <li className="color-dot" style={{ backgroundColor: product.cor2 }}></li>
                <li className="color-dot" style={{ backgroundColor: product.cor3 }}></li>
              </ul>
            </div>
          </div>
          <div class="frame-193"></div>
          <div class="pulseira-pai">
            <div class="tamanho-da-pulseira">
              <span>Tamanho da pulseira:</span>
              <span class="mm">14mm</span>
            </div>
            <div class="medida-pai">
              <div class="frame-85">
                <span class="medida">14mm</span>
              </div>
              <div class="frame-85">
                <span class="medida">24mm</span>
              </div>
              <div class="frame-85">
                <span class="medida">34mm</span>
              </div>
            </div>
          </div>
        </div>
        <div class="compatibilidade">
          <div class="pai-compatibilidade">
            <span>Compatibilidade</span>
            <span class="cor-compatibilidade">•IPHONE </span>
            <span class="cor-compatibilidade">•SAMSUNG</span>
          </div>
          <div class="pai-modelo">
            <span>Modelo</span>
            <span class="cor-disso">Watch Series 7</span>
          </div>
          <div class="pai-marca">
            <span>Marca</span>
            <span class="cor-disso">Apple</span>
          </div>
        </div>
        <div class="area-entrega">
          <div class="titulo-entrega">
            <ion-icon name="bicycle-outline"></ion-icon>
            <span>Calcular a Entrega:</span>
            <span class="frete1">Frete Grátis</span>
          </div>
          <div class="inseir-cep">
            <input class="imput" type="text" placeholder="CEP" />
            <div class="btn-calcular">
              <span class="calcular1">Calcular</span>
            </div>
          </div>
          <span class="n-sei-meu-cep">Não sei meu CEP</span>
        </div>

        <div class="footer-infor">
          <span class="info">Rilógio Ismart Uati P30</span>
          <div class="pai-do-pai">
            <div class="pai-informacao">
              <div class="paii">
                <span class="corzinha">Cor:</span>
                <span class="dark2">Dark Black</span>
              </div>

              <div class="paii">
                <span class="corzinha">Tam. Pulseira</span>
                <span class="dark2">14mm</span>
              </div>

              <div class="paii">
                <span class="corzinha">Acessórios</span>
                <span class="dark2">Não</span>
              </div>
            </div>
            <div class="a-vista-pai">
              <span class="a-vista">Valor: (Á Vista) </span>
              <div class="pai-preco">
                <span class="preco1">R${product.nprice}</span>
                <span>ou</span>
              </div>
              <div class="pai-preco">
                <span class="dark2">12x</span>
                <span>de</span>
                <span class="preco1">R${price_12}</span>
              </div>
            </div>
          </div>
          <div>
            <div class="pai-frete">
              <div class="pai-preco">
                <span class="frete2">Entrega:</span>
                <span class="dark2">FRETE GRATIS</span>
              </div>

              <div class="pai-preco">
                <span>Prazo de Entrega:</span>
                <span class="dark2">6 à 12 dias úteis</span>
              </div>
            </div>
          </div>
          <div class="add-sacola">
            <ion-icon class="icon-add" name="add-circle-outline"></ion-icon>
            <span class="colocar-sacola">Colocar na Sacola</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfosCompra;
