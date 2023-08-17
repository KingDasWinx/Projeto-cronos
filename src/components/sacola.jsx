import { Link, useParams } from "react-router-dom";
import { array } from "../script/array";
import "../style/sacola.css";
import { useEffect, useState } from "react";
import { get, set } from "local-storage";


function Sacola() {

    const [value, setValue] = useState(get('valor') || 0);

    const addValue = () => {
        const novoValor = value + 1;
        setValue(novoValor);
        set('valor', novoValor);
    }
    const remValue = () => {
        if (value > 0) {
            const novoValor = value - 1;
            setValue(novoValor);
            set('valor', novoValor);
        }
    }

    useEffect(() => {
        if (value === 0) {
            set('valor', 0);
        }
    }, [value]);

    const { id } = useParams()
    const productId = parseInt(id);
    const product = array.find(product => product.id === productId)


    const numero = parseInt(product.nprice);

    const pp = numero + 48.29
    const precoo = pp.toFixed(2);

    const price_1 = `${product.nprice}` / 12
    const price_12 = price_1.toFixed(2);

    const pD = (pp / 100) * 12
    const precoD = pD.toFixed(3);

    const pE = numero - precoD
    const precoE = pE.toFixed(2);
    

    return (
        <div key={product.id} className="body-sacola" >
            <div class="container-pai-do-pai">
                <div class="conteiner-sacola">
                    <div class="produtos-delete">
                        <div class="produtos-frete">
                            <ion-icon class="dados" name="lock-closed"></ion-icon>
                            <p>PRODUTOS E FRETE</p>
                        </div>
                        <div class="limpar-sacola">
                            <ion-icon name="trash"></ion-icon>
                            <p>LIMPAR-SACOLA</p>
                        </div>
                    </div>
                    <div class="card-itemSacola">
                        <div class="imagem-pai">
                            <img class="relogio-sacola" src={product.img} alt="" />
                            <div class="adicionar-remove">
                                {value === 1 ? (
                                    <button className="trash-bu" type="button" value="Diminuir Count">
                                        <ion-icon id="trash" class="trash" name="trash"></ion-icon>
                                    </button>
                                ) : (
                                    <button onClick={remValue} type="button" value="Diminuir Count">
                                        <ion-icon id="remove" class="remove" name="remove"></ion-icon>
                                    </button>
                                )}
                                <p id="number-quantidade">{value}</p>

                                <button onClick={addValue}>
                                    <ion-icon class="add" name="add"></ion-icon>
                                </button>
                            </div>
                        </div>

                        <div class="escrita-nome-relogio-pai">
                            <p class="escrita-nome-relogio">{product.title}</p>
                            <div class="relogio-infos">
                                <div class="marca">
                                    <p>Marca:<br />
                                        <p class="modelo-black">Apple</p>
                                    </p>
                                </div>
                                <div class="modelo">
                                    <p>Modelo:<br />
                                        <p class="modelo-black">Watch Series 7</p>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="bar-ver"></div>

                        <div class="cor-tam-pai">
                            <div class="cor-do-produto">
                                <p>Cor do Produto:</p>
                                <div class="cor-bolinha" style={{background: product.cor1}} ></div>
                                <p class="modelo-black">Dark Black</p>
                            </div>
                            <div class="tamanho-pulseira">
                                <p>Tam. Pulseira:</p>
                                <p class="modelo-black">14mm</p>
                            </div>
                        </div>

                        <div class="bar-ver"></div>

                        <div class="preco-bag">
                            <div class="preco-row">
                                <p class="produto-size">Produto:</p>
                                <p class="modelo-black"> R${product.nprice}</p>
                            </div>
                            <div class="preco-row">
                                <p class="frete-size">Frete:</p>
                                <p class="modelo-black"> R$48,29</p>
                            </div>
                            <div class="bar-hor"></div>

                            <p class="valor-size">Valor(Total):</p>
                            <p class="preco-bag-roxo">R${precoo}</p>
                        </div>
                    </div>
                </div>

                <div class="card-pagamento">
                    <div class="info-pagamento-row">
                        <ion-icon class="menu-icon" name="list-sharp"></ion-icon>
                        <h1 class="info-pagamento">Informações do pagamento</h1>
                    </div>
                    <div class="conteiner-info-pagamento">
                        <div class="valor-escrita">
                            <p class="valor-size-roxo">Valor (Produtos)</p>
                            <p class="modelo-black">R${product.nprice}</p>
                        </div>
                        <div class="valor-escrita">
                            <p class="valor-size-roxo">Valor (Frete)</p>
                            <p class="modelo-black">R$42,99</p>
                        </div>

                        <div class="bar-hor"></div>

                        <div class="valor-escrita">
                            <p class="valor-size-roxo">Total</p>
                            <p class="preco-roxo">R${precoo}</p>
                        </div>
                        <div class="valor-escrita">
                            <p>(Valor em até</p>
                            <p class="preco-roxo">12x</p>de <p class="preco-roxo">R${price_12} SEM JUROS)</p>
                        </div>
                        <div class="conteiner-pix-pai">


                            <div class="desconto-12">
                                <p class="desconto12">Desconto de 12%</p>
                            </div>
                            <div class="conteiner-pix">

                                <p>À vista no pix</p>
                                <p class="preco-roxo">R${precoE}</p>
                                <div class="valor-escrita-button">
                                    <p>Economize:</p>
                                    <p class="preco-roxo">R${precoD}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="pagamento-compras">
                        <div class="button-pagamento">
                            <p>REALIZAR PAGAMENTO</p>
                        </div>
                        <Link to={`/compra/${product.id}`} >
                        <div class="button-compras">
                            <p>VOLTAR ÀS COMPRAS</p>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sacola;