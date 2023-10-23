import React from 'react';

function MenuBar({ onMenuChange }) {

  const handleMenuItemClick = (menu) => {
    // Call the onMenuChange callback with the clicked menu
    onMenuChange(menu);
  };

  return (
    <div className="menu-bar">
      <button onClick={() => handleMenuItemClick('menu1')}>Menu 1</button>
      <button onClick={() => handleMenuItemClick('menu2')}>Menu 2</button>
      <button onClick={() => handleMenuItemClick('menu3')}>Menu 3</button>
    </div>
  );
}

export default MenuBar;

