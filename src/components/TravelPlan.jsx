import { useState } from "react";
import { initialTravelPlan } from "../data/data";
import TravelTree from "./TravelTree";
export default function TravelPlan() {
  // accha data gulo k render korar jonno amader sorbo prothom data gulo k import kore ekta state a rakhte hobe
  const [plans, setPlans] = useState(initialTravelPlan);

  const places = plans.childPlaces;

  // akhn ekhane plans mane ki ei puro data object ta
  // akhn amra map kore jei part ta render kori sob somoi sei part ta k alada component a rakha better
  return (
    <div>
      <h1 className="text-3xl font-bold">Places to visit</h1>
      <ol>
        {places.map((place) => (
          <TravelTree key={place.id} places={place} />
        ))}
      </ol>
    </div>
  );
}
