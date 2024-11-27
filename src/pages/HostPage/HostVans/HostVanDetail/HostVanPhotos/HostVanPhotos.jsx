import { useOutletContext } from "react-router-dom";
import "./HostVanPhotos.scss";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();
  return (
    <section className="host-van-detail-photo">
      <img src={currentVan.imageUrl} className="detail-photo" alt={currentVan.name} />
    </section>
  );
}
