import "./HostVans.scss";
import { Link, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api/api";
import { requireAuth } from "../../../utils/redirectToHome";

export async function loader() {
  await requireAuth();
  return getHostVans();
}

export default function HostVans() {
  const vans = useLoaderData();

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
        <section>{hostVansEls}</section>
      </div>
    </section>
  );
}
