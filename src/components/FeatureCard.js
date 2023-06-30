import React from "react";

const FeatureCard = ({ img, title, desc }) => {
  return (
    <div
      className="py-8 px-8 rounded-lg shadow-xl"
      style={{ boxShadow: "0 15px 60px 0 rgba(50, 46, 127, .17)" }}
    >
      <div className="flex flex-col justify-between">
        <img className="float-left w-12 h-12 cursor-pointer" src={img} alt="" />
        <div>
          <h4 className="mt-9 text-FeatureCard-h4 w-full">{title}</h4>
          <p className="mt-2.5 text-FeatureCard-p">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
