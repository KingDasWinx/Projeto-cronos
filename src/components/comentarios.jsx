import "../style/comentarios.css";
import madara from '../assets/madara.jpeg'
import madaraa from '../assets/madaraa.gif'

import wel from '../assets/welin.jpg'
import welin from '../assets/welinton.png'

import motta from '../assets/motta.jpg'
import mota from '../assets/mottaa.png'

import fafa from '../assets/faisca.jpg'
import faisca from '../assets/fafa.jpg'


function Comentario() {



    const users = [
        {
            userName: "João Moreira",
            userFoto: `${ madara }`,
            comentario: "amei o produto",
            recomenda: "sim",
            modelo: "Esmalte ualte trez",
            cor1: "Moreira",
            cor2: "esperma",
            data: "11/09/2001",
            fotoProduto: `${ madaraa }`
        },
        {
            userName: "João Motta",
            userFoto: `${ motta }`,
            comentario: "achei uma bosta",
            recomenda: "não",
            modelo: "resmalte uairte",
            cor1: "preta gil",
            cor2: "elza ramazio",
            data: "13/02/1945",
            fotoProduto: `${ mota }`
        },
        {
            userName: "Welton John",
            userFoto: `${ wel }`,
            comentario: "ta valendo a pena",
            recomenda: "sim",
            modelo: "Emegafone3por4",
            cor1: "wil smot",
            cor2: "toreto",
            data: "13/05/1988",
            fotoProduto: `${ welin }`
        },
        {
            userName: "Fafa (dog do moreira)",
            userFoto: `${ fafa }`,
            comentario: "auauau",
            recomenda: "auau(sim)",
            modelo: "Dogsmalte 3",
            cor1: "kid bengala",
            cor2: "beiçola",
            data: "06/06/1945",
            fotoProduto: `${ faisca }`
        }
    ]

    return (

        <div>
            <div class="frame-447-1">
                <p class="comentarios-avaliacoes-text">Comentários e Avaliações:</p>
            </div>
            <div className="pai-comentario" >
            {users.map(user => {
                return (
                    <div>
                        <div class="comentarios-e-avaliacoes">
                            <div class="frame-447">
                                <div class="comentario">
                                    <div class="usuario">
                                        <div class="frame-442">
                                            <img class="usuario-foto-perfil" src={user.userFoto} alt={user.userName} />
                                            <div class="frame-439">
                                                <span class="usuario-nome">{user.userName}</span>
                                                <div class="estrelas-de-avalicao">
                                                    <ion-icon class="star s1" name="star"></ion-icon>
                                                    <ion-icon class="star s2" name="star"></ion-icon>
                                                    <ion-icon class="star s3" name="star"></ion-icon>
                                                    <ion-icon class="star s4" name="star"></ion-icon>
                                                    <ion-icon class="star s5" name="star-half"></ion-icon>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="data-avaliacao">Data da Avaliação: <span class="data-avaliacao-span">{user.data}</span>
                                        </p>
                                    </div>
                                    <div class="frame-436">
                                        <p class="comentario-text">Comentário:</p>
                                        <span class="comentario-text-user">{user.comentario}</span>
                                    </div>
                                    <div class="frame-437">
                                        <p class="recomenda-o-produto">Recomenda o Produto?</p>
                                        <span class="recomenda-o-produto-user">{user.recomenda}</span>
                                    </div>
                                    <div class="frame-439-1">
                                        <div class="frame-444">
                                            <p class="modelo">Modelo:</p>
                                            <span class="modelo-user frame-439-2">• {user.modelo}</span>
                                        </div>
                                        <div class="frame-445">
                                            <p class="cor-do-produto">Cor do produto:</p>
                                            <div class="frame-441">

                                                <span class="cor-do-produto-user frame-439-2">• {user.cor1}</span>
                                                <div class="cor-do-produto-user-dark-black"></div>

                                                <span class="cor-do-produto-user frame-439-2">• {user.cor2}</span>
                                                <div class="cor-do-produto-user-galak-white"></div>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="frame-438">
                                        <p class="foto-do-produto">Fotos do Produto:</p>
                                        <p class="foto-do-produto-quantidade"><span>5</span> fotos</p>
                                        <div class="frame-440">
                                            <img class="foto-do-produto-imagem" src={user.fotoProduto} alt="" />
                                            <img class="foto-do-produto-imagem" src={user.fotoProduto} alt="" />
                                            <img class="foto-do-produto-imagem" src={user.fotoProduto} alt="" />
                                            <img class="foto-do-produto-imagem" src={user.fotoProduto} alt="" />
                                            <img class="foto-do-produto-imagem" src={user.fotoProduto} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>

        </div>
    )
}

export default Comentario;