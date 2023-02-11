function Card({ item }) {
  let badgeText;
  if (item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (item.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`images/${item.coverImg}`} className="card--image"></img>

      <div className="card--stats">
        <img src="images/star.png" className="card--star"></img>
        <span>{item.stats.rating}</span>
        <span className="gray">({item.stats.reviewCount}) • </span>
        <span className="gray">{item.location}</span>
      </div>
      <p>Life lesson with Katie Zaferes</p>
      <p>
        <span className="bold">From ${item.price}</span> / person
      </p>
    </div>
  );
}

export default Card;
