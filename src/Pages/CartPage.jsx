import { useHelmet } from '../Components/Global/seoConfig'
import CardIngredient from '../Components/CardIngredient/CardIngredient'
import { getAllIngredients } from '../services/IngService'


const Ingredients = await getAllIngredients()

export default function CartPage() {
    const seoData = {
    title: 'YaquoiWeb - Preparez votre panier',
    description: 'Découvrez notre sélection de produits pour préparer votre panier en ligne. Profitez de nos offres exclusives et faites vos achats en toute simplicité.',
    keywords: 'panier, produits, offres, achats en ligne',
    image: 'https://yaquoiweb.com/assets/images/panier.jpg',
  }

  return (
    <>
      {/* SEO */}
      {useHelmet(seoData)}

      {/* Contenu */}
    <div className="page-container">
      <section className='ing-hab'>
        <div className='head-section'>
          <h2 className="title-2">Vos ingrédients habituels</h2>
          <button><a href="/ajouter-ingredient">+ Ajouter un ingrédient</a></button>
        </div>
        {/* appel au composant de search sur les ingrédients */}
        {/* <Search table="Ingredient" /> */}
        {/* avec les resultats de la recherche */}
        <article>
          {/* creer un nouveau composant "CardIngredient" qui affiche le nom de l'ingredient, une checkbox pour le selectionner et un bouton acceder a une page de details sur l'ingredients */}
          {Ingredients.length > 0 ? (
            <div className='card-container'>
              {Ingredients.map(ingredient => (
                <CardIngredient key={ingredient.id} nom={ingredient.nom} id={ingredient.id} />
              ))}
            </div>
          ) : (
            <p>Aucun ingrédient trouvé.</p>
          )}
        </article>


      </section>
      
      {/* au moment de l'appuie sur ce bouton on enregistre les ingredients selectionné dans la table "Panier" et on redirige vers la page de courses */}
      <button><a href="/courses">Lancer les courses</a></button>

    </div>
    </>
  )
}
