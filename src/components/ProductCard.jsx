import { whatsappLinkFor } from '../data/contato'
import { FruitIcon } from './icons/fruits'
import './ProductCard.css'

function ProductCard({ produto }) {
  const cor = produto.cor || 'red'

  return (
    <article
      className={`product-card product-card--${cor}${produto.esgotado ? ' product-card--esgotado' : ''}`}
    >
      {produto.esgotado ? (
        <span className="product-card__tag product-card__tag--esgotado">Esgotado</span>
      ) : (
        produto.tag && <span className="product-card__tag">{produto.tag}</span>
      )}
      <div className="product-card__jar" aria-hidden="true">
        <FruitIcon id={produto.id} className="product-card__jar-icon" />
      </div>
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      {produto.esgotado ? (
        <span className="product-card__cta product-card__cta--disabled">Indisponível no momento</span>
      ) : (
        <a
          href={whatsappLinkFor(`Olá! Vim pelo site da Alegria Geleias e queria pedir a geleia de ${produto.nome} 😊`)}
          target="_blank"
          rel="noopener noreferrer"
          className="product-card__cta"
        >
          Pedir no WhatsApp
        </a>
      )}
    </article>
  )
}

export default ProductCard
