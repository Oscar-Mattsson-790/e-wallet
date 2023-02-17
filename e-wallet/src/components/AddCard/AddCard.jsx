import Top from "../Top/Top";
import Card from "../Card/Card";
import "./AddCard.css";
import CreditCardsData from "../../assets/creditcards.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddCard() {
  const navigate = useNavigate();
  const cardData = CreditCardsData[4];
  const [addedCardsArray, setAddedCardsArray] = useState([]);
  const [addedCard, setAddedCard] = useState({
    id: "",
    cardNumber: "",
    cardHolderName: "",
    valid: "",
    ccv: "",
    color: "",
    logo: "",
    chip: "",
    vendor: "",
  });

  function handleClick() {
    const matchinCardData = CreditCardsData.filter(
      (card) => card.vendor === addedCard.vendor
    );

    console.log("matching card: ", matchinCardData);
    if (matchinCardData.length > 0) {
      setAddedCard({
        ...addedCard,
        id: matchinCardData[0].id,
        color: matchinCardData[0].color,
        logo: matchinCardData[0].logo,
        chip: matchinCardData[0].chip,
        vendor: matchinCardData[0].vendor,
      });
    }
    localStorage.setItem(
      "addedCards",
      JSON.stringify([...addedCardsArray, addedCard])
    );

    setAddedCardsArray(() => {
      const storedCards = localStorage.getItem("addedCards");
      return storedCards ? [...JSON.parse(storedCards)] : [];
    });

    navigate("/");
  }

  function handleKeyDown(event) {
    const value = event.target.value;
    if (
      value.length >= 16 &&
      event.key !== "Backspace" &&
      event.key !== "Delete"
    ) {
      event.preventDefault();
    }
  }

  function handleKeyDownCcv(event) {
    const value = event.target.value;
    if (
      value.length >= 3 &&
      event.key !== "Backspace" &&
      event.key !== "Delete"
    ) {
      event.preventDefault();
    }
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
          maxLength={16}
          required
          value={addedCard.cardNumber}
          onKeyDown={handleKeyDown}
          onChange={(event) => {
            setAddedCard({ ...addedCard, cardNumber: event.target.value });
          }}
        />
        <label>CARDHOLDER NAME</label>
        <input
          className="input-long"
          placeholder="FIRST LASTNAME"
          type="text"
          required
          value={addedCard.cardHolderName}
          onChange={(event) => {
            setAddedCard({ ...addedCard, cardHolderName: event.target.value });
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
            value={addedCard.valid}
            style={{ width: "100%" }}
            onChange={(event) => {
              setAddedCard({ ...addedCard, valid: event.target.value });
            }}
          />
        </div>
        <div>
          <label>CCV</label>
          <input
            className="input-short"
            placeholder="CCV"
            type="number"
            max={3}
            required
            value={addedCard.ccv}
            style={{ width: "100%" }}
            onKeyDown={handleKeyDownCcv}
            onChange={(event) => {
              setAddedCard({ ...addedCard, ccv: event.target.value });
            }}
          />
        </div>
      </form>

      <form className="input-container-third">
        <label>VENDOR</label>
        <select
          className="input-long"
          required
          value={addedCard.vendor}
          onChange={(event) => {
            setAddedCard({ ...addedCard, vendor: event.target.value });
          }}
        >
          <option value=""></option>
          <option value="Bitcoing inc">BITCOIN INC</option>
          <option value="Ninja bank">NINJA BANK</option>
          <option value="Block chain inc">BLOCK CHAIN INC</option>
          <option value="Evil corp">EVIL CORP</option>
        </select>
      </form>
      <button className="addCard-btn" onClick={handleClick}>
        ADD CARD
      </button>
    </div>
  );
}
