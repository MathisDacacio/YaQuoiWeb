import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import NotFound from '../../Pages/NotFound'


// Lazy loading des pages - les bundles se chargent à la demande
const HomePage = lazy(() => import('../../Pages/HomePage'))
const CartPage = lazy(() => import('../../Pages/CartPage'))
const StockPage = lazy(() => import('../../Pages/StockPage'))
const ProfilePage = lazy(() => import('../../Pages/ProfilePage'))
const IngredientDetailsPage = lazy(() => import('../../Pages/IngredientDetailsPage'))
const ShoppingListPage = lazy(() => import('../../Pages/CoursePage'))

// Composant Fallback pour le lazy loading
function LoadingSpinner() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh'
    }}>
      <div style={{
        fontSize: '1.2rem',
        color: '#667eea',
        fontWeight: 'bold'
      }}>
        ⏳ Chargement...
      </div>
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/accueil" replace />} />
      
      {/* Chaque route est wrappée avec Suspense pour le loading state */}
      <Route path="/accueil" element={
        <Suspense fallback={<LoadingSpinner />}>
          <HomePage />
        </Suspense>
      } />
      
      <Route path="/panier" element={
        <Suspense fallback={<LoadingSpinner />}>
          <CartPage />
        </Suspense>
      } />
      
      <Route path="/stock" element={
        <Suspense fallback={<LoadingSpinner />}>
          <StockPage />
        </Suspense>
      } />
      
      <Route path="/profil" element={
        <Suspense fallback={<LoadingSpinner />}>
          <ProfilePage />
        </Suspense>
      } />

      <Route path="/ingredient/:id" element={
        <Suspense fallback={<LoadingSpinner />}>
          <IngredientDetailsPage />
        </Suspense>
      } />

      <Route path="/courses" element={
        <Suspense fallback={<LoadingSpinner />}>
          <ShoppingListPage />
        </Suspense>
      } />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
