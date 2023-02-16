import Top from "../Top/Top";
import Card from "../Card/Card";
import "./AddCard.css";
import CreditCardsData from "../../assets/creditcards.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import blockchainLogo from "../../src/assets/vendor-blockchain.svg";
import bitcoinLogo from "../../src/assets/vendor-bitcoin.svg";
import ninjaLogo from "../../src/assets/vendor-ninja.svg";
import evilCorpLogo from "../../src/assets/vendor-evilcorp.svg";

export default function AddCard() {
  const cardData = CreditCardsData[4];
  const [addedCards, setAddedCards] = useState([]);
  const [addedCard, setAddedCard] = useState({
    id: 0,
    cardNumber: "",
    cardHolderName: "",
    valid: "",
    ccv: "",
    color:
      "linear-gradient(248.52deg, rgba(0, 0, 0, 0.15) 1.49%, rgba(0, 0, 0, 0) 100%), #8B58F9",
    vendor: "",
    logo: "../../src/assets/vendor-blockchain.svg",
    chip: "../../src/assets/chip-light.svg",
  });
  const vendorLogos = {
    "block chain inc": blockchainLogo,
    "bitcoing inc": bitcoinLogo,
    "ninja bank": ninjaLogo,
    "evil corp": evilCorpLogo,
  };

  function handleClick() {
    const logoUrl = vendorLogos[addedCard.vendor];
    setAddedCard({ ...addedCard, logo: logoUrl });
    localStorage.setItem(
      "addedCards",
      JSON.stringify([...addedCards, addedCard])
    );
    setAddedCards(() => {
      const storedCards = localStorage.getItem("addedCards");
      return storedCards ? JSON.parse(storedCards) : [];
    });
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
          {Object.keys(vendorLogos).map((vendor) => (
            <option key={vendor} value={vendor}>
              {vendor.toUpperCase()}
            </option>
          ))}
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
