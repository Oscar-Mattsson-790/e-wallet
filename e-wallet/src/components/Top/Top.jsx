import "./Top.css";

export default function Top() {
  const addCardHeader = {
    title: "ADD A NEW BANK CARD",
    text: "NEW CARD",
  };

  console.log(addCardHeader);

  return (
    <div className="top">
      <h1 className="top-header">E-WALLET</h1>
      <p className="top-header-text">ACTIVE CARD</p>
    </div>
  );
}
