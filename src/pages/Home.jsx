import { Link } from 'react-router-dom'
import { tradicionais } from '../data/produtos'
import ProductCard from '../components/ProductCard'
import Carousel from '../components/Carousel'
import useDocumentMeta from '../hooks/useDocumentMeta'
import './Home.css'

function Home() {
  const destaques = tradicionais

  useDocumentMeta(
    'Alegria Geleias | Geleias artesanais de Curitiba',
    'Geleias artesanais feitas à mão em Curitiba: morango, maçã com canela, abacaxi com pimenta calabresa e mais. Peça pelo WhatsApp ou compre na nossa loja no Shopee.'
  )

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
            <a href="#historia" className="btn btn--ghost">
              Nossa história
            </a>
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

      <section id="historia" className="section historia">
        <div className="section__header">
          <h2>Nossa história</h2>
        </div>
        <div className="historia__conteudo">
          <p>
            A Alegria Geleias nasceu na cozinha de casa, em Curitiba, entre potes fervendo e o
            cheiro de fruta madura tomando conta do bairro. O que começou como presente para
            amigos e vizinhos virou uma pequena produção artesanal, sempre em lotes limitados
            para garantir o mesmo cuidado de sempre.
          </p>
          <p>
            Trabalhamos com produtores da região metropolitana de Curitiba e do litoral
            paranaense, priorizando frutas da época. Nossas receitas misturam sabores
            tradicionais, como morango e maçã com canela, com combinações mais ousadas — caso
            do abacaxi com pimenta calabresa e da goiaba com especiarias.
          </p>
          <p>
            Sem conservantes, sem pressa. Cada geleia leva o tempo que precisa no fogo baixo,
            porque é assim que se preserva o sabor de verdade.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
