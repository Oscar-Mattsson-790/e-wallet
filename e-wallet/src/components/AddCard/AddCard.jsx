import Top from "../Top/Top";
import Card from "../Card/Card";
import "./AddCard.css";
import CreditCardsData from "../../assets/creditcards.json";
import { useState } from "react";

export default function AddCard() {
  const cardData = CreditCardsData[4];
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [dates, setDates] = useState("");

  return (
    <div className="addCard">
      <Top />
      <Card cardData={cardData} />
      <form className="input-container">
        <label>CARD NUMBER</label>
        <input
          className="input-long"
          placeholder="XXXX XXXX XXXX XXXX"
          type="number"
        />
        <label>CARDHOLDER NAME</label>
        <input
          className="input-long"
          placeholder="FIRST LASTNAME"
          type="text"
        />
      </form>

      <form className="input-container-second">
        <div>
          <label>VALID THRU</label>
          <input
            className="input-short"
            type="month"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <label>CCV</label>
          <input
            className="input-short"
            placeholder="CCV"
            type="number"
            style={{ width: "100%" }}
          />
        </div>
      </form>

      <form className="input-container-third">
        <label>VENDOR</label>
        <select className="input-long">
          <option value=""></option>
          <option value="bitcoing inc">BITCOIN INC</option>
          <option value="ninja bank">NINJA BANK</option>
          <option value="block chain inc">BLOCK CHAIN INC</option>
          <option value="evil corp">EVIL CORP</option>
        </select>
      </form>
      <button className="addCard-btn">ADD CARD</button>
    </div>
  );
}
