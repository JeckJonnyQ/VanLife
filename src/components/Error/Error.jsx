import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.scss";

export default function Error() {
  const error = useRouteError();

  return (
    <div className="error">
      <h2 className="error__name">Error: {error.message}</h2>
      <pre>
        {error.status} - {error.statusText}
      </pre>
    </div>
  );
}
