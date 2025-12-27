export default function TravelTree({ places }) {
  const childPlaces = places.childPlaces;
  console.log(childPlaces);
  // accha ekhane dekhen amra already ekta nested object k render korte giye problem a pore gechi, eita jodi r o deep hoto tobe problem ta kintu r o beshi hoto, ekhane muloto r ekta additional check add koreche prothome check koreche childPlaces ache kina then jodi thake tokhn check koreche childPlaces.length > 0 kina ar por map koreche amra first check ta na korai amader proper render hocchilo na, akhn dhorun eita ei obosthai render kora tai eto ta painful tobe eita k jodi edit korte hoi tobe eita kmn hobe cholun dekhi

  return (
    <li>
      <h1>{places.title}</h1>

      <ol>
        {childPlaces &&
          childPlaces.length > 0 &&
          childPlaces.map((place) => (
            <TravelTree key={place.id} places={place} />
          ))}
      </ol>
    </li>
  );
}
