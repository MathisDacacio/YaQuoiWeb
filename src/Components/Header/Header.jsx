import { Link, NavLink } from 'react-router-dom'
import './Header.css'

/**
 * Composant Header
 * 
 * Refactorisé pour utiliser React Router:
 * 
 * Link: Navigation simple sans style actif
 * NavLink: Comme Link mais ajoute automatiquement la classe "active"
 *          quand la route courante correspond
 * 
 * Avantages:
 * ✓ Pas de rechargement de page
 * ✓ État actif automatique basé sur l'URL courante
 * ✓ Historique navigateur natif
 * ✓ Code plus simple et lisible
 */
export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* Logo et nom avec Link vers la page d'accueil */}
        <Link to="/accueil" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div className="logo-section">
            <span className="logo">🍽️</span>
            <h1 className="app-name">Yaquoi</h1>
          </div>
        </Link>

        {/* Navigation avec NavLink - style actif automatique */}
        <nav className="nav-menu">
          <NavLink 
            to="/accueil"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Accueil
          </NavLink>
          
          <NavLink 
            to="/stock"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Stock
          </NavLink>
          
          <NavLink 
            to="/panier"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Panier
          </NavLink>
        </nav>

        {/* Bouton profil avec Link */}
        <Link to="/profil" style={{ textDecoration: 'none' }}>
          <button className="profile-icon">
            👤
          </button>
        </Link>
      </div>
    </header>
  )
}

