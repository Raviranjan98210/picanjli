import React from "react";

const CardContent = ({ Icon, heading, value, iconSize }) => {
  return (
    <div className="pl-4 pt-5  text-white ">
      <Icon style={{ fontSize: `${iconSize}` }} />
      <strong className="mr-1 text-sm tracking-wide">{heading}:</strong>
      <strong className="text-sm">{value}</strong>
    </div>
  );
};

export default CardContent;
