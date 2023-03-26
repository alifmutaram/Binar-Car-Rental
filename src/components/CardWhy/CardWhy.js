const Card = ({ cardImg, cardTitle, cardText }) => {
  return (
    <div className="card">
      <img src={cardImg} alt="icon" />
      <h6 className="card-title">{cardTitle}</h6>
      <p className="card-text">{cardText}</p>
    </div>
  );
};

export default Card;
