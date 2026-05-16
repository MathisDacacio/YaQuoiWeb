import './CardIngredient.css'

export default function CardIngredient({ nom, id }) {
  return (
    <div className="card-ingredient">
      <h3>{nom}</h3>
      <div className="actions">
        <label>
          <input type="checkbox" />
          Sélectionner
        </label>
        <button><a href={`/ingredient/${id}`}>Détails</a></button>
      </div>
    </div>
  )
}
