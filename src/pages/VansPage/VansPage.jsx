import { useEffect, useState } from "react";
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
      <img src={van.imageUrl} />

      <div className="van-card__info">
        <h3 className="van-card__info_name">{van.name}</h3>
        <p className="van-card__info_price">
          ${van.price}
          <span>/day</span>
        </p>
      </div>
      <i className={`van-card__type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return (
    <div className="vans-container">
      <h2 className="vans-container__title">Explore our van options</h2>
      <div className="vans-list">{vanElements}</div>
    </div>
  );
}
