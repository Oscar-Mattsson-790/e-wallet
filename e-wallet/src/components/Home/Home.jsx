import "./Home.css";
import Top from "../Top/Top";

export default function Home() {
  return (
    <div className="home">
      <Top />
      <button className="home-btn">ADD A NEW CARD</button>
    </div>
  );
}
