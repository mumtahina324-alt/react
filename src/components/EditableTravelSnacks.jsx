import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function EditableTravelSnacks() {
  // component duita same but eita kebol edit kora jai, amra edit kortechi kintu seita directly ui te update hocche na, muloto ei problem tai hoi jokhn amra evabe duplicaate value kori, mane same value duita stae a rakhi,
  // Avoid duplication in state  kno & ki issue ba benifit seita to amra bujhte parlam?
  // ok amader ekhan kar kaj shes akhn amra ki korbo eita k commit kore debo
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);
  // ekhane amra ki korlam data ta k duplicate na kore kebol seitar id k ekta state a nilam & selected item ta k derived ba calculate korlam
  // nicher ei value ta k bola hoi derived value, eita ki korlo items theke id diye selected items k derived korlo
  const selectedItem = items.find((item) => item.id === selectedId);

  function handleItemChange(id, e) {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            title: e.target.value,
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <input
              className="border border-black"
              value={item.title}
              onChange={(e) => {
                handleItemChange(item.id, e);
              }}
            />{" "}
            <button
              className="border border-black"
              onClick={() => {
                setSelectedId(item.id);
              }}
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>
        You picked{" "}
        <span className="font-bold text-green-500">{selectedItem.title}</span>.
      </p>
    </>
  );
}
