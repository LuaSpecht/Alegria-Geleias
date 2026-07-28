import { tradicionais, edicoesLimitadas, edicoesSazonais } from '../data/produtos'
import ProductCard from '../components/ProductCard'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Produtos.css'

function Produtos() {
  useDocumentMeta(
    'Nossos Sabores | Alegria Geleias',
    'Conheça todos os sabores da Alegria Geleias: tradicionais, edições limitadas e sazonais. Geleias artesanais feitas à mão em Curitiba.'
  )

  return (
    <section className="section produtos-page">
      <div className="section__header">
        <h1>Nossos sabores</h1>
        <p>Cada geleia é feita em pequenos lotes, respeitando a época de cada fruta.</p>
      </div>

      <div className="produtos-categoria">
        <h2>Sabores tradicionais</h2>
        <div className="product-grid">
          {tradicionais.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </div>

      <div className="produtos-categoria">
        <h2>Edições limitadas</h2>
        <p className="produtos-categoria__aviso">No momento essas edições estão esgotadas.</p>
        <div className="product-grid">
          {edicoesLimitadas.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </div>

      <div className="produtos-categoria">
        <h2>Edições sazonais</h2>
        <p className="produtos-categoria__aviso">No momento essas edições estão esgotadas.</p>
        <div className="product-grid">
          {edicoesSazonais.map((produto) => (
            <ProductCard key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Produtos
