import { useState } from "react";
import { normalizedTravelPlan } from "../data/normalized-data.js";
import TravelTree from "./TravelTree";
export default function TravelPlan() {
  const [plans, setPlans] = useState(normalizedTravelPlan);

  // age eitai chilo root object
  // const places = plans.childPlaces;
  const root = plans[0];

  // akhn places ta derived hobe id wise
  // accha amra muloto root level ei derived korechi ei jonno kebol root data k dekhacche
  // accha ekhane amra id ta k Traveltree component a pass korechi & PlacebyId hishabe puro plans data kei pass korechi jate derived ta amra Traveltree te korte pari, jeita root a kore amra dekhechilam kebol root ar data e render korchilo
  const placeIds = root.childIds;
  return (
    <div>
      <h1 className="text-3xl font-bold">Places to visit</h1>
      <ol>
        {placeIds.map((id) => (
          <TravelTree key={id} id={id} placeById={plans} />
        ))}
      </ol>
    </div>
  );
}
