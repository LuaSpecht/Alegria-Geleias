import { NavLink } from 'react-router-dom'
import { whatsappLink, shopeeLink } from '../data/contato'
import './Header.css'

function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="brand">
          <img src="/alegria-logo.png" alt="Alegria Geleias" className="brand__logo" />
        </NavLink>

        <nav className="nav">
          <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
            Início
          </NavLink>
          <NavLink to="/produtos" className={({ isActive }) => (isActive ? 'active' : '')}>
            Produtos
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>
            Sobre
          </NavLink>
          <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>
            Contato
          </NavLink>
        </nav>

        <div className="header-actions">
          <a href={shopeeLink} target="_blank" rel="noopener noreferrer">
            Shopee
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
