// EditScreen.jsx
import React from 'react';
import './EditScreen.css';  // Importing the CSS

function EditScreen() {
  const updateItem = () => {
    // Your logic for updating the item
    console.log("Item updated!");
  };

  const deleteItem = () => {
    // Your logic for deleting the item
    console.log("Item deleted!");
  };

  return (
    <div className="edit-buttons-container">
      <button className="edit-button update-button" onClick={updateItem}>Update</button>
      <button className="edit-button delete-button" onClick={deleteItem}>Delete</button>
    </div>
  );
}

export default EditScreen;
