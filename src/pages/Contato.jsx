import WhatsAppIcon from '../components/icons/WhatsAppIcon'
import ShopeeIcon from '../components/icons/ShopeeIcon'
import { whatsappLink, shopeeLink } from '../data/contato'
import './Contato.css'

function Contato() {
  return (
    <section className="section contato-page">
      <div className="section__header">
        <h1>Fale com a gente</h1>
        <p>Dúvidas, encomendas ou parcerias — chama no WhatsApp ou visita nossa loja no Shopee.</p>
      </div>

      <div className="contato-grid">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contato-card contato-card--whatsapp"
        >
          <WhatsAppIcon className="contato-card__icon" />
          <h2>WhatsApp</h2>
          <p>Chama a gente direto no WhatsApp pra encomendas e dúvidas.</p>
          <span className="btn btn--primary">Conversar agora</span>
        </a>

        <a
          href={shopeeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="contato-card contato-card--shopee"
        >
          <ShopeeIcon className="contato-card__icon" />
          <h2>Shopee</h2>
          <p>Compre as geleias com entrega pra todo o Brasil na nossa loja oficial.</p>
          <span className="btn btn--primary">Ver loja</span>
        </a>
      </div>

      <div className="contato-info">
        <h2>Alegria Geleias</h2>
        <p>Curitiba, PR</p>
        <p>Segunda a sexta, 9h às 18h</p>
      </div>
    </section>
  )
}

export default Contato
