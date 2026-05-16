import "./Search.css"

// Loupe, bar de recherche et bloc de filtre en fonction de la table (Ingredient, Recette, Param, etc....)
export default function Search({table}) {
    return (
        <div className="search-container">
            <input type="text" placeholder="Rechercher un plat, une recette..." />
            <button>Rechercher</button>
        </div>
    );
}