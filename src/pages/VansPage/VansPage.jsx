import { useEffect } from "react";
import "./VansPage.scss";

export default function VansPage() {
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div className="vans">
      <h1>This is Vans Page</h1>
    </div>
  );
}
