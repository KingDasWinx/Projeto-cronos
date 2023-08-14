import "../style/infos-compra.css";

function InfosCompra() {
  return (
    <div class="personalizacao-dos-produtos">
      <div class="relogio">
        <ion-icon class="heart" name="heart-outline"></ion-icon>
        <span class="escrita-rologio">Rilógio Ismart Uati P30</span>
        <div class="frame-399">
          <span class="estoque">Estoque:</span>
          <span class="disponibilidade">874 Disponíveis</span>
        </div>
      </div>
      <div class="frame-271">
        <div class="preco-pai">
          <span class="a-partir-de">A partir de</span>
          <span class="preco1">R$4.299</span>
        </div>
        <div class="stars">
          <span class="avaliation">4.7</span>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star"></ion-icon>
          <ion-icon name="star-half"></ion-icon>
          <span class="number-avaliation">(892)</span>
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
            <div class="frame-87">
              <div class="frame-88"></div>
            </div>
            <div class="frame-87">
              <div class="frame-881"></div>
            </div>
            <div class="frame-87">
              <div class="frame-882"></div>
            </div>
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
              <span class="preco1">R$4.299</span>
              <span>ou</span>
            </div>
            <div class="pai-preco">
              <span class="dark2">12x</span>
              <span>de</span>
              <span class="preco1">R$429,90</span>
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
  );
}

export default InfosCompra;