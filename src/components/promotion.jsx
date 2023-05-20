export function Promotion(props) {
  return (
    <div className="promotion-content">
      <h2>{props.title}</h2>
      <p>{props.expression}</p>
      <a href="#">Más información <ion-icon name="chevron-forward-outline"></ion-icon></a>
      <img src={`public/images/iphone-${props.image}.png`} alt={props.descripttion} />
    </div>
  );
}