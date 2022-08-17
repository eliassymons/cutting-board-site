import Card from "./Card";
import data from "../data";

export default function Products() {
  const cards = data.map((item) => {
    return (
      <Card
        img={item.img}
        title={item.title}
        key={item.id}
        id={item.id}
        info={item.info}
      />
    );
  });
  return (
    <div className="products-container">
      <h3 className="products-title">products</h3>
      <h4>click a link to find our boards on etsy!</h4>
      <div className="cards-container">{cards}</div>
    </div>
  );
}
