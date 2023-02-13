import "./Home.css";
import Top from "../Top/Top";
import Card from "../Card/Card";
import CardStack from "../CardStack/CardStack";

export default function Home() {
  return (
    <div className="home">
      <Top />
      <Card />
      <CardStack />
      <button className="home-btn">ADD A NEW CARD</button>
    </div>
  );
}
