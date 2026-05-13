import './Card.css'

export default function Card({ title, description, image }) {
  return (
    <div className="card-item">
      {image && <img src={image} alt={title} className="card-image" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
