import React from 'react';

function MenuBar({ onMenuChange }) {

  const handleMenuItemClick = (menu) => {
    // Call the onMenuChange callback with the clicked menu
    onMenuChange(menu);
  };

  return (
    <div className="menu-bar">
      <button onClick={() => handleMenuItemClick('menu1')}>My Badges</button>
      <button onClick={() => handleMenuItemClick('menu2')}>My Certs</button>
      <button onClick={() => handleMenuItemClick('menu3')}>My Data</button>
    </div>
  );
}

export default MenuBar;

