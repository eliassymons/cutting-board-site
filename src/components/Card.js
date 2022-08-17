export default function Card(props) {
  return (
    <div className="card">
      <img
        alt={`card-${props.id}`}
        src={require(`../images/${props.img}`)}
        className="card-img"
      />
      <div className="card-info">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-details">{props.info}</p>
      </div>
    </div>
  );
}
