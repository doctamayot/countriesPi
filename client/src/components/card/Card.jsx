export const Card = ({ name, img, continent }) => {
  return (
    <div>
      <h3>{name}</h3>
      <img src={img} alt={name} />
      <h5>{continent}</h5>
    </div>
  );
};
