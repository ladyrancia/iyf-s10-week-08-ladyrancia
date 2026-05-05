function Card({ children, title, variant = "default" }) {
  const variantClass = `card-${variant}`;

  return (
    <div className={`card ${variantClass}`}>
      {title && <h3 className="card-title">{title}</h3>}
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

export default Card;
