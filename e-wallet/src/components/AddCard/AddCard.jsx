import Top from "../Top/Top";
import Card from "../Card/Card";
import "./AddCard.css";
import CreditCardsData from "../../assets/creditcards.json";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function AddCard() {
  const cardData = CreditCardsData[4];
  const [newCard, setNewCard] = useState({
    cardNumber: "",
    cardHolderName: "",
    valid: "",
    ccv: "",
    vendor: "",
  });

  function handleClick() {
    console.log(newCard);
  }

  return (
    <div className="addCard">
      <Top
        title="ADD A NEW BANK CARD"
        description="NEW CARD"
        style={{ color: "red" }}
      />
      <Card cardData={cardData} />
      <form className="input-container">
        <label>CARD NUMBER</label>
        <input
          className="input-long"
          placeholder="XXXX XXXX XXXX XXXX"
          type="number"
          required
          value={newCard.cardNumber}
          onChange={(event) => {
            setNewCard({ ...newCard, cardNumber: event.target.value });
          }}
        />
        <label>CARDHOLDER NAME</label>
        <input
          className="input-long"
          placeholder="FIRST LASTNAME"
          type="text"
          required
          value={newCard.cardHolderName}
          onChange={(event) => {
            setNewCard({ ...newCard, cardHolderName: event.target.value });
          }}
        />
      </form>

      <form className="input-container-second">
        <div>
          <label>VALID THRU</label>
          <input
            className="input-short"
            type="month"
            required
            value={newCard.valid}
            style={{ width: "100%" }}
            onChange={(event) => {
              setNewCard({ ...newCard, valid: event.target.value });
            }}
          />
        </div>
        <div>
          <label>CCV</label>
          <input
            className="input-short"
            placeholder="CCV"
            type="number"
            required
            value={newCard.ccv}
            style={{ width: "100%" }}
            onChange={(event) => {
              setNewCard({ ...newCard, ccv: event.target.value });
            }}
          />
        </div>
      </form>

      <form className="input-container-third">
        <label>VENDOR</label>
        <select
          className="input-long"
          required
          value={newCard.vendor}
          onChange={(event) => {
            setNewCard({ ...newCard, vendor: event.target.value });
          }}
        >
          <option value=""></option>
          <option value="bitcoing inc">BITCOIN INC</option>
          <option value="ninja bank">NINJA BANK</option>
          <option value="block chain inc">BLOCK CHAIN INC</option>
          <option value="evil corp">EVIL CORP</option>
        </select>
      </form>
      <Link to="/">
        <button className="addCard-btn" onClick={handleClick}>
          ADD CARD
        </button>
      </Link>
    </div>
  );
}
