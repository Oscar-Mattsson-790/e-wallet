import Top from "../Top/Top";
import Card from "../Card/Card";
import "./AddCard.css";
import CreditCardsData from "../../assets/creditcards.json";
import { useState, useEffect } from "react";
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

  // linear-gradient(248.3deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0) 100%), #D0D0D0
  // ../../src/assets/vendor-bitcoin.svg
  // ../../src/assets/chip-dark.svg

  function handleClick() {
    console.log(CreditCardsData);
    console.log(addedCard);
    const matchingCardData = CreditCardsData.filter(
      (card) => card.vendor.toLowerCase() === addedCard.vendor.toLowerCase()
    );

    console.log("matching card: ", matchingCardData);
    if (matchingCardData.length > 0) {
      setAddedCard({
        ...addedCard,
        id: matchingCardData[0].id,
        color: matchingCardData[0].color,
        logo: matchingCardData[0].logo,
        chip: matchingCardData[0].chip,
        vendor: matchingCardData[0].vendor,
      });
    }

    const storedCards = localStorage.getItem("addedCards");
    const updatedCards = storedCards
      ? [...JSON.parse(storedCards), addedCard]
      : [addedCard];
    localStorage.setItem("addedCards", JSON.stringify(updatedCards));
    setAddedCardsArray(updatedCards);

    ////////////////////////////////////////////////

    // setAddedCardsArray(() => {
    //   const storedCards = localStorage.getItem("addedCards");
    //   return storedCards ? [...JSON.parse(storedCards)] : [];
    // });

    // localStorage.setItem(
    //   "addedCards",
    //   JSON.stringify([...addedCardsArray, addedCard])
    // );
  }

  useEffect(() => {
    if (addedCard.id !== "") {
      navigate("/");
    }
  }, [addedCard.id, navigate]);

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
          <option value="Bitcoin inc">Bitcoin inc</option>
          <option value="Ninja bank">Ninja bank</option>
          <option value="Block chain inc">Block chan inc</option>
          <option value="Evil corp">Evil corp</option>
        </select>
      </form>
      <button className="addCard-btn" onClick={handleClick}>
        ADD CARD
      </button>
    </div>
  );
}
