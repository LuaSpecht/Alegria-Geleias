import WhatsAppIcon from './icons/WhatsAppIcon'
import ShopeeIcon from './icons/ShopeeIcon'
import { whatsappLink, shopeeLink } from '../data/contato'
import './Footer.css'

function Footer() {
  const ano = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__stripe" aria-hidden="true">
        <span className="stripe stripe--red" />
        <span className="stripe stripe--orange" />
        <span className="stripe stripe--green" />
        <span className="stripe stripe--blue" />
      </div>
      <div className="site-footer__inner">
        <div>
          <img src="/alegria-logo.png" alt="Alegria Geleias" className="site-footer__logo" />
          <p>Geleias artesanais feitas à mão em Curitiba/PR.</p>
        </div>
        <div className="site-footer__contato">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            WhatsApp
          </a>
          <a href={shopeeLink} target="_blank" rel="noopener noreferrer">
            <ShopeeIcon />
            Loja no Shopee
          </a>
        </div>
      </div>
      <div className="site-footer__copy">
        <p>© {ano} Alegria Geleias. Todos os direitos reservados.</p>
        <p>
          Site desenvolvido por{' '}
          <a
            href="https://portfolio-pied-ten-56.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lua Web Development
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
