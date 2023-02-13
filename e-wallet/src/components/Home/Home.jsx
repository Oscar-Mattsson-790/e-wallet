import "./Home.css";
import Top from "../Top/Top";
import Card from "../Card/Card";

export default function Home() {
  return (
    <div className="home">
      <Top />
      <Card />
      <button className="home-btn">ADD A NEW CARD</button>
    </div>
  );
}
