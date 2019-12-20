import React from "react";

function Loader({}, ref) {
  return (
    <div className="loader" ref={ref[0]}>
      <h1 className="loading-img" ref={ref[1]}>
        Seding email...
      </h1>
    </div>
  );
}

const fowardedLoader = React.forwardRef(Loader);

export default fowardedLoader;
