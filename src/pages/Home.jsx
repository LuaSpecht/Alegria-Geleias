import { Link } from 'react-router-dom'
import { tradicionais } from '../data/produtos'
import ProductCard from '../components/ProductCard'
import Carousel from '../components/Carousel'
import './Home.css'

function Home() {
  const destaques = tradicionais

  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <span className="hero__eyebrow script">Feito à mão, com carinho</span>
          <h1>Geleias artesanais que carregam o sabor da alegria</h1>
          <p>
            Frutas selecionadas, cozimento lento e receitas de família. A Alegria Geleias
            transforma o melhor da nossa terra em potinhos de sabor.
          </p>
          <div className="hero__actions">
            <Link to="/produtos" className="btn btn--primary">
              Ver produtos
            </Link>
            <Link to="/sobre" className="btn btn--ghost">
              Nossa história
            </Link>
          </div>
        </div>
        <div className="hero__image">
          <img
            src="/hero-image.jpg"
            alt="Potes de Geleias Alegria com sabores de morango, abacaxi com pimenta e maçã com canela"
          />
        </div>
      </section>

      <section className="section">
        <div className="section__header">
          <h2>Sabores tradicionais</h2>
          <Link to="/produtos">Ver todos os sabores →</Link>
        </div>
        <Carousel
          items={destaques}
          renderItem={(produto) => <ProductCard produto={produto} />}
        />
      </section>

      <section className="section section--valores">
        <div className="valor">
          <h3>100% artesanal</h3>
          <p>Produção em pequenos lotes, sem conservantes ou aromas artificiais.</p>
        </div>
        <div className="valor">
          <h3>Produtores locais</h3>
          <p>Frutas compradas de pequenos produtores da região metropolitana de Curitiba.</p>
        </div>
        <div className="valor">
          <h3>Receitas de família</h3>
          <p>Cada sabor carrega uma história — algumas passadas de geração em geração.</p>
        </div>
      </section>
    </>
  )
}

export default Home
