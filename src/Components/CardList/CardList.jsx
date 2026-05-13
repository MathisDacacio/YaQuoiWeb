import '../CardList/CardList.css'
import Card from '../Card/Card'

export default function CardList() {
    const meals = [
    {
      title: "Pizza Margherita",
      description: "Pizza classique avec tomate, mozzarella et basilic frais"
    },
    {
      title: "Pâtes Carbonara",
      description: "Pâtes à la sauce crémeuse avec guanciale, œuf et parmesan"
    },
    {
      title: "Salade César",
      description: "Laitue fraîche, croûtons, parmesan et sauce César maison"
    },
    {
      title: "Burger Gourmand",
      description: "Steak haché, bacon, cheddar, tomate et oignon caramélisé"
    },
    {
      title: "Sushi Assortis",
      description: "Sélection de sushis frais avec saumon, thon et avocat"
    },
    {
      title: "Poulet Tikka Masala",
      description: "Poulet tendre dans une sauce épicée et crémeuse à l'indienne"
    }
  ]
  
  return (
    <div className="meals-grid">
        {meals.map((meal, index) => (
          <Card 
            key={index}
            title={meal.title}
            description={meal.description}
          />
        ))}
    </div>
  )
}
