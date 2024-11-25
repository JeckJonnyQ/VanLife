import { Link, useParams } from "react-router-dom";
import "./HostVanDetail.scss";
import { useEffect, useState } from "react";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  console.log(currentVan);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

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
      </div>
    </section>
  );
}
