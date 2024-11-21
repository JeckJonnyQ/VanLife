import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./VansPage.scss";

export default function VansPage() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="van-card">
      <Link
        to={`/vans/${van.id}`}
        aria-label={`View details for ${van.name}, priced at $${van.price} per day`}
      >
        <img src={van.imageUrl} alt={`Image of ${van.name}`} />

        <div className="van-card__info">
          <h3 className="van-card__info_name">{van.name}</h3>
          <p className="van-card__info_price">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-card__type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="vans-container">
      <h2 className="vans-container__title">Explore our van options</h2>
      <div className="vans-list">{vanElements}</div>
    </div>
  );
}
