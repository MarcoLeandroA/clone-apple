export function Product(props) {
  return (
    <div className="product-item">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <span className="more-info">
        <a href="#">Mas informacion<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
          <path d="M13 18l6 -6"></path>
          <path d="M13 6l6 6"></path>
        </svg></a>
      </span>
      <img src={`./images/prod-${props.image}.png`} alt={props.alt} />
    </div>
  );
}