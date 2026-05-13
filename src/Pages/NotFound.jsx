export default function NotFound() {
  return (
    <div className="page-container">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '4rem', color: '#667eea', margin: '0 0 1rem 0' }}>404</h1>
        <h2 style={{ color: '#333', marginBottom: '1rem' }}>Page non trouvée</h2>
        <p style={{ color: '#666', fontSize: '1.1rem', marginBottom: '2rem' }}>
          Désolé, la page que vous cherchez n'existe pas.
        </p>
        <a 
          href="/" 
          style={{
            padding: '0.75rem 2rem',
            backgroundColor: '#667eea',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            transition: 'background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#764ba2'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#667eea'}
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  )
}
