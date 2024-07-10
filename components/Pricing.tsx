import React from "react";
import PricingCard from "./globalui/PricingCard";

const Pricing = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto justify-center items-center mt-40">
      <h1 className="small-heading text-3xl font-semibold">Pricing</h1>
      <h4 className="text-5xl font-bold pt-1">
        Experience your product as you{" "}
      </h4>
      <h4 className="text-5xl font-bold pt-1 mb-10">create it.</h4>
      <PricingCard />
    </div>
  );
};

export default Pricing;
