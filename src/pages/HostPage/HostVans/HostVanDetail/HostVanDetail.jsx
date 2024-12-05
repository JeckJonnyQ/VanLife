import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import "./HostVanDetail.scss";
import { getHostVans } from "../../../../api/api";
import { requireAuth } from "../../../../utils/redirectToHome";

export async function loader({ params }) {
  await requireAuth();
  return getHostVans(params.id);
}

export default function HostVanDetail() {
  const currentVan = useLoaderData();

  return (
    <section className="host-van">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>
              ${currentVan.price}
              <span>/day</span>
            </h4>
          </div>
        </div>

        <nav className="host-van__nav">
          <NavLink to="." end>
            Details
          </NavLink>
          <NavLink to="pricing">Pricing</NavLink>
          <NavLink to="photos">Photos</NavLink>
        </nav>

        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}
