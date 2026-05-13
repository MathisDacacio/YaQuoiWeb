import Header from './Components/Header/Header'
import AppRoutes from './Components/Routes/AppRoutes'


export default function App() {
  return (
    <div className="app">
      {/* Header avec navigation utilisant NavLink (active state automatique) */}
      <Header />
      
      {/* Système de routing principal */}
      <main className="main-content">
        <AppRoutes />
      </main>
    </div>
  )
}
