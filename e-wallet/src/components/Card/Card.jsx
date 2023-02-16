import "./Card.css";

export default function Card({ cardData, onClick }) {
  return (
    <>
      {cardData && (
        <div
          className="card"
          onClick={onClick}
          style={{ background: `${cardData.color}` }}
        >
          <div className="card-header">
            <img className="chip" src={cardData.chip} alt="chip" />
            <img className="card-logo" src={cardData.logo} alt="card-logo" />
          </div>
          <p className="card-numbers">{cardData.cardNumber}</p>
          <div className="-card-wrapper">
            <div className="card-container">
              <div className="container-name">
                <p className="card-informtion">CARDHOLDER NAME</p>
                <p className="card-information-second">
                  {cardData.cardHolderName}
                </p>
              </div>
              <div className="container-number">
                <p className="card-informtion">VALID THRU</p>
                <p className="card-information-second">{cardData.valid}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
