import Top from "../Top/Top";
import Card from "../Card/Card";
import "./AddCard.css";
import CreditCardsData from "../../assets/creditcards.json";
import { Link } from "react-router-dom";

export default function AddCard() {
  const cardData = CreditCardsData[4];

  const newCard = {
    cardNumber: "",
    cardHolderName: "",
    valid: "",
    ccv: "",
    vendor: "",
  };

  console.log(newCard);

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
          onChange={(event) => {
            newCard.cardNumber = event.target.value;
          }}
        />
        <label>CARDHOLDER NAME</label>
        <input
          className="input-long"
          placeholder="FIRST LASTNAME"
          type="text"
          required
          onChange={(event) => {
            newCard.cardHolderName = event.target.value;
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
            style={{ width: "100%" }}
            onChange={(event) => {
              newCard.valid = event.target.value;
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
            style={{ width: "100%" }}
            onChange={(event) => {
              newCard.ccv = event.target.value;
            }}
          />
        </div>
      </form>

      <form className="input-container-third">
        <label>VENDOR</label>
        <select
          className="input-long"
          required
          onChange={(event) => {
            newCard.vendor = event.target.value;
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
