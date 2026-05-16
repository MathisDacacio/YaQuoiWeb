import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useHelmet } from '../Components/Global/seoConfig'
import { getIngredientById } from '../services/IngService'
import '../styles/IngredientDetailsPage.css'

export default function IngredientDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ingredient, setIngredient] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchIngredient = async () => {
      try {
        const data = await getIngredientById(parseInt(id))
        if (data) {
          setIngredient(data)
        } else {
          setError('Ingrédient non trouvé')
        }
      } catch (err) {
        setError('Erreur lors du chargement de l\'ingrédient')
        console.error(err)
      }
    }
    fetchIngredient()
  }, [id])

  if (error) {
    const seoData = {
        title: 'YaquoiWeb - Ingrédient non trouvé',
        description: 'L\'ingrédient que vous recherchez est introuvable. Veuillez vérifier l\'URL ou revenir à la page précédente.',
        url: `https://yaquoi.com/ingredient/${id}`,
        }
    return (
      <>
        {useHelmet(seoData)}
        <div className="page-container">
          <p className="error-message">{error}</p>
          <button onClick={() => navigate(-1)} className="btn-back">
            Retour
          </button>
        </div>
      </>
    )
  }

  const seoData = {
    title: ingredient ? `${ingredient.nom} - Détails` : 'Détails de l\'ingrédient',
    description: ingredient ? `Détails et informations sur ${ingredient.nom}` : 'Détails de l\'ingrédient',
    url: `https://yaquoi.com/ingredient/${id}`,
  }

  return (
    <>
      {useHelmet(seoData)}
      <div className="page-container">
        <button onClick={() => navigate(-1)} className="btn-back">
          ← Retour
        </button>

        {ingredient && (
          <div className="ingredient-details">
            <h1 className="ingredient-title">{ingredient.nom}</h1>
            
            <div className="ingredient-info">
              <div className="info-section">
                <h2>Informations</h2>
                <table className="ingredient-table">
                  <tbody>
                    <tr>
                      <td><strong>ID:</strong></td>
                      <td>{ingredient.id}</td>
                    </tr>
                    {ingredient.unite_defaut && (
                      <tr>
                        <td><strong>Unité par défaut:</strong></td>
                        <td>{ingredient.unite_defaut}</td>
                      </tr>
                    )}
                    {ingredient.prix && (
                      <tr>
                        <td><strong>Prix:</strong></td>
                        <td>{ingredient.prix}€</td>
                      </tr>
                    )}
                    {ingredient.categorie && (
                      <tr>
                        <td><strong>Catégorie:</strong></td>
                        <td>{ingredient.categorie}</td>
                      </tr>
                    )}
                    {ingredient.stock !== undefined && (
                      <tr>
                        <td><strong>Stock:</strong></td>
                        <td>{ingredient.stock}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="ingredient-actions">
              <button className="btn-primary">Ajouter au panier</button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
