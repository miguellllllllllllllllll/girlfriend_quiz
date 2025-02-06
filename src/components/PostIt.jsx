import React, { useState } from "react";
import "../PostIt.css"; // Import CSS für das Styling

const PostIt = ({ text = "Default sticky note text" }) => {
  const [items, setItems] = useState([text]);

  const toggleDone = (index) => {
    setItems((prev) =>
      prev.map((item, i) =>
        i === index
          ? item.startsWith("✔ ")
            ? item.slice(2)
            : "✔ " + item
          : item
      )
    );
  };

  const handleChange = (e, index) => {
    const newItems = [...items];
    newItems[index] = e.target.innerText;
    setItems(newItems);
  };

  return (
    <div className="post-it">
      <h1>Information:</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            contentEditable
            suppressContentEditableWarning={true}
            onClick={() => toggleDone(index)}
            className={item.startsWith("✔ ") ? "done" : ""}
            onBlur={(e) => handleChange(e, index)} // Speichert Text beim Verlassen der Eingabe
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostIt;
