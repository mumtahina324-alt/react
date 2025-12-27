export default function TravelTree({ id, placeById }) {
  // ei ekta issue kheyal na korai eto kahini
  // ekhane amader complete functionality add korte hobe, nite parben akhn r o mane continue korbo? continue korbo na next day dekhben oita

  const place = placeById[id];
  const childIds = place?.childIds;

  return (
    <li>
      <h1>{place.title}</h1>
      <ol>
        {childIds?.length > 0 &&
          childIds.map((childId) => (
            <TravelTree key={childId} id={childId} placeById={placeById} />
          ))}
      </ol>
    </li>
  );
}
