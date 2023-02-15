import "./Home.css";
import Top from "../Top/Top";
import Card from "../Card/Card";
import CardStack from "../CardStack/CardStack";
import { Link } from "react-router-dom";
import CreditCardsData from "../../assets/creditcards.json";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    if (!activeCard) {
      setActiveCard(CreditCardsData[0]);
    }
  }, []);

  return (
    <div className="home">
      <Top title="E-WALLET" description="ACTIVE CARD" />
      <Card cardData={activeCard} />
      <CardStack activeCard={activeCard} />
      <Link to="/addcard">
        <button className="home-btn">ADD A NEW CARD</button>
      </Link>
    </div>
  );
}
