import { useEffect, useState } from "react";
import "./VanDetail.scss";
import { useParams, Link, useLocation } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />

          <div className="van-detail__info">
            <i className={`van-type ${van.type} selected`}>{van.type}</i>

            <h2 className="van-detail__info_name">{van.name}</h2>
            <p className="van-detail__info_price">
              <span>${van.price}</span>/day
            </p>
            <p className="van-detail__info_desc">{van.description}</p>
            <button className="van-detail__info_btn">Rent this van</button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
