import "./Card.css";

export const Card = ({ name, img, continent }) => {
  return (
    <div className="principalCard">
      <h3>{name}</h3>
      <img src={img} alt={name} className="imgFlag" />
      <h5>{continent}</h5>
    </div>
  );
};
