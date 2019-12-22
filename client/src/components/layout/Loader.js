import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";

function Loader({ t }, ref) {
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    localStorage.link = t(location.pathname);
    history.push(location.pathname);
  }, []);

  return (
    <div className="loader" ref={ref[0]}>
      <h1 className="loading-img" ref={ref[1]}>
        {t("Loader.loading")}
      </h1>
    </div>
  );
}

const fowardedLoader = React.forwardRef(Loader);

export default fowardedLoader;
