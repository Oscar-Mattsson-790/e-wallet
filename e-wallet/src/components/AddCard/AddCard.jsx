import Card from "../Card/Card";
import Top from "../Top/Top";
import "./AddCard.css";

export default function AddCard() {
  return (
    <div className="addCard">
      <Top />
      <Card />
      <div>
        <form>
          <label>
            <span>CARD NUMBER</span>
            <input />
            <span>CARDHOLDER NAME</span>
            <input />
          </label>
        </form>
      </div>
      <div>
        <form>
          <label>
            <span>VALID THRU</span>
            <input />
            <span>CCV</span>
            <input />
          </label>
        </form>
      </div>
      <form>
        <label>
          <span>VENDOR</span>
          <input />
        </label>
      </form>
      <button className="addCard-btn">ADD CARD</button>
    </div>
  );
}
