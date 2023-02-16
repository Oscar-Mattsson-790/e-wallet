import "./CardStack.css";
import Card from "../Card/Card";
import CreditCards from "../../assets/creditcards.json";

export default function CardStack({ activeCard, setActiveCard }) {
  const nonActiveCards = CreditCards.filter((card) => {
    return card?.id !== activeCard?.id && card?.id !== 5;
  });

  return (
    <div className="cardStack">
      <div className="cardStack-container" style={{ color: "#FFFFFF" }}>
        {nonActiveCards.map((card, key) => (
          <Card key={key} cardData={card} onClick={() => setActiveCard(card)} />
        ))}
      </div>
    </div>
  );
}
