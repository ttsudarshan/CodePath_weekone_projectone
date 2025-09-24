export default function Card({ title, subtitle, image, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <h3 style={{ color: "black" }}>{title}</h3>
      <p>{subtitle}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>View Details</button>
      </a>
    </div>
  );
}
