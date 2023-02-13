import "./Card.css";
import chipDark from "../../assets/chip-dark.svg";
import bitcoin from "../../assets/vendor-bitcoin.svg";

export default function Card() {
  return (
    <div className="card">
      <div className="card-header">
        <img className="chip" src={chipDark} alt="chip" />
        <img className="bitcoin" src={bitcoin} alt="bitcoin" />
      </div>
      <p className="card-numbers">1234 5678 9101 1123</p>
      <div className="-card-wrapper">
        <div className="card-container">
          <div className="container-name">
            <p className="card-informtion">CARDHOLDER NAME</p>
            <p className="card-information-second">OSCAR MATTSSON</p>
          </div>
          <div className="container-number">
            <p className="card-informtion">VALID THRU</p>
            <p className="card-information-second">12/22</p>
          </div>
        </div>
      </div>
    </div>
  );
}
