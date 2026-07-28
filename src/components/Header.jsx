import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { whatsappLink, shopeeLink } from '../data/contato'
import './Header.css'

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  function fecharMenu() {
    setMenuAberto(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <NavLink to="/" className="brand" onClick={fecharMenu}>
          <img src="/alegria-logo.png" alt="Alegria Geleias" className="brand__logo" />
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((aberto) => !aberto)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`site-header__menu${menuAberto ? ' site-header__menu--aberto' : ''}`}>
          <nav className="nav">
            <NavLink
              to="/"
              end
              onClick={fecharMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Início
            </NavLink>
            <NavLink
              to="/produtos"
              onClick={fecharMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Produtos
            </NavLink>
            <NavLink
              to="/contato"
              onClick={fecharMenu}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
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
      </div>
    </header>
  )
}

export default Header
