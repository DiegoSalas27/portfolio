import React from "react";

function Loader({ t }, ref) {
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
