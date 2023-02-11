function Card({ item }) {
  return (
    <div className="card">
      <img src={item.imageUrl} className="card--image"></img>
      <div className="card--info">
        <div>
          <img src="images/fill.png"></img>
          <span className="card--country">{item.location}</span>
          <a href={item.googleMapsUrl} className="card--position">
            View on Gooogle Maps
          </a>
        </div>
        <h2 className="card--title">{item.title}</h2>
        <h5 className="card--time">
          {item.startDate} - {item.endDate}
        </h5>
        <p className="card--description">{item.description}</p>
      </div>
    </div>
  );
}

export default Card;
<div>
  <img></img>
</div>;
