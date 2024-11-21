import { useEffect, useState } from "react";
import "./VanDetail.scss";
import { useParams } from "react-router-dom";

export default function VanDetail() {
  const [van, setVan] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />

          <div className="van-detail__info">
            <i className={`van-detail__info_type ${van.type} selected`}>
              {van.type}
            </i>

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
