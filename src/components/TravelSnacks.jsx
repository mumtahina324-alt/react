import { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

export default function TravelSnacks() {
  // accha eita muloto ekta travel snack bar list , j khane amra travel a kon snacks ta khete chai seita choose korte pari
  // ekhane ki kora hoyeche items gulo k ekta state a neya hoyeche
  const [items, setItems] = useState(initialItems);
  // then selectedItem ar jonno abar r ekta new state neya hoyeche
  const [selectedItem, setSelectedItem] = useState(items[0]);

  // ei khetre ghotona ki hocche ekta same data k duita state a rakha hocche, eita onk somoi prblm create kore, amra ki problem hoi sei ta arekta component a dekhbo, so akhn ei component a jehetu amra kaj korechi eita k commit kore debo, akhn commit korar duita way ache 1. git add . 2. git commit -m "message" othoba, oikhane kebol msg likhe commit btn a press korlei commit hoye jai eita auto git add kore nei

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded ml-4"
              onClick={() => {
                setSelectedItem(item);
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
    </div>
  );
}
