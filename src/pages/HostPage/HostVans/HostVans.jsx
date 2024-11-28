import { useEffect, useState } from "react";
import "./HostVans.scss";

import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansEls = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-vans__list-wrapper">
      <div className="host-vans__list_single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van__info">
          <h3 className="host-van__info_name">{van.name}</h3>
          <p className="host-van__info_price">${van.price}/day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section className="host-vans">
      <h1 className="host-vans__title">Your listed vans</h1>
      <div className="host-vans__list">
        {vans.length > 0 ? (
          <section>{hostVansEls}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </section>
  );
}
