import { useHelmet } from '../Components/Global/seoConfig'
import CardList from '../Components/CardList/CardList'

export default function HomePage() {
  const seoData = {
    title: 'YaquoiWeb - Commandez vos repas en ligne | Livraison rapide',
    description: 'Découvrez nos meilleurs repas frais et délicieux. Pizza, Pâtes, Sushi et bien d\'autres. Livraison rapide partout en France.',
    url: 'https://yaquoi.com/accueil',
    image: 'https://yaquoi.com/og-image.jpg'
  }

  return (
    <>
      {/* SEO */}
      {useHelmet(seoData)}

      {/* Contenu */}
      <div className="page-container">
        <h1 className="title">Yaquoi</h1>
        <CardList />
      </div>
    </>
  )
}
