import React from "react";
import BrandThumb from "../../../../../assets/brands.png";
import DecoThumb from "../../../../../assets/utlilities-deco-left.png";
import "./index.scss";

export default function Brand() {
  return (
    <div className="brand">
      <img src={DecoThumb} className="deco" alt="" />
      <img src={BrandThumb} alt="brands" />
    </div>
  );
}
