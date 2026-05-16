import { useHelmet } from '../Components/Global/seoConfig'
import '../styles/CoursePage.css'

export default function CoursePage() {
  const seoData = {
    title: 'YaquoiWeb - Liste de courses',
    description: 'Votre liste de courses personnalisée. Parcourez les produits sélectionnés et procédez au paiement.',
    url: 'https://yaquoi.com/courses',
  }

  return (
    <>
      {useHelmet(seoData)}
      <div>
        <h1 className="title">Votre Liste de Courses</h1>
      </div>
    </>
  )
}
