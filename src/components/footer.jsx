import "../style/footer.css";
import email_icon from '../assets/email-icon.png'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
import linkedin from '../assets/linkedin-icon.png'
import localization from '../assets/localization-icon.png'
import phone from '../assets/phone-icon.png'

function Footer() {
    return (
        <div>
            <footer class="footer-main --row">
                <div class="content-footer --column">
                    <h1 class="title-footer">Conheça-nos</h1>
                    <p class="text-footer">Cronos foi criada a partir de um sonho de adolescentes. A empresa foi fundada a 2 anos atrás.</p>
                </div>

                <div class="content-footer --column">
                    <h1 class="title-footer">Nossas Redes Sociais</h1>
                    <div class="sub-content-footer --row">
                        <img class="img-icon" src={instagram} alt="" />
                        <img class="img-icon" src={facebook} alt="" />
                        <img class="img-icon" src={linkedin} alt="" />
                    </div>
                </div>

                <div class="content-footer --column">
                    <h1 class="title-footer">Produtos</h1>
                    <p class="link-footer">SmartWatchs</p>
                    <p class="link-footer">Pulseiras</p>
                    <p class="link-footer">Capinhas</p>
                    <p class="link-footer">Películas</p>
                </div>

                <div class="content-footer --column">
                    <h1 class="title-footer">Atendimento</h1>
                    <div class="sub-content-footer --column">
                        <div class="sub-content-footer --row" >
                            <img class="img-icon" src={localization} alt="" />
                            <p class="text-footer">Av. Brasil, 28892 - Centro, <br /> <strong>Cascavel - PR, 85812-001</strong></p>
                        </div>
                        <span class="bar"></span>
                        <div class="sub-content-footer --row" >
                            <img class="img-icon" src={phone} alt="" />
                            <p class="text-footer"><strong>(45) 3162-963<br /> (45) 99898-7225</strong></p>
                        </div>
                        <span class="bar"></span>
                        <div class="sub-content-footer --row" >
                            <img class="img-icon" src={email_icon} alt="" />
                            <p class="link-footer"><strong>cronos.support@contact.com.br</strong></p>
                        </div>

                    </div>
                </div>
            </footer>
            <div class="sub-footer">
                ©️ 2021 - 2023 Cronos | CNPJ:15.071.738/0001-17  | Avenida Brasil,28892 - Centro, Cascavel - PR
            </div>
        </div>
    )
}

export default Footer;