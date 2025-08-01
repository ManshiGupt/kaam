import React, { useState } from 'react';

const DragDrop = () => {
  const [items, setItems] = useState(['Item A', 'Item B', 'Item C']);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDrop = (index) => {
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(draggedItemIndex, 1);
    updatedItems.splice(index, 0, movedItem);
    setItems(updatedItems);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow dropping
  };

  return (
    <ul className="w-1/2 mx-auto mt-10">
      {items.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          className="p-4 m-2 bg-orange-100 text-center rounded shadow cursor-move"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DragDrop;


