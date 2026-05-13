import { getAllUsers } from '../services/UserService'

// Récupérer tous les utilisateurs
const users = await getAllUsers()

export default function ProfilePage() {
  return (
    <div className="page-container">
      <h1 className="title">Mon Profil</h1>
      <p style={{ fontSize: '1.1rem', color: '#666' }}>Informations de profil</p>
      <p>
        {/* Affichage de la liste des utilisateurs */}
        {users.length > 0 ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
        ) : (
          <p>Aucun utilisateur trouvé.</p>
        )}
      </p>
    </div>
  )
}
