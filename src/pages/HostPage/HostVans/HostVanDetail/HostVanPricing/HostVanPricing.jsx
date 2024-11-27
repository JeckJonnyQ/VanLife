import { useOutletContext } from "react-router-dom";
import "./HostVanPricing.scss";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  console.log(currentVan);
  return (
    <section className="host-van-detail-price">
      <h4>
        {`$${currentVan.price}`}
        <span>/day</span>
      </h4>
    </section>
  );
}
