import React, { useState, useEffect } from 'react';
import Badge from '../components/Badge';
import LeftMenu from '../components/LeftMenu';

function Badges() {
   const [badgesData, setBadgesData] = useState([]);

   useEffect(() => {
    const data = [
       { imgSrc: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Badge1" },
       { imgSrc: "https://via.placeholder.com/150/00FF00/000000?text=Badge2" },
       { imgSrc: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Badge3" },
       { imgSrc: "https://via.placeholder.com/150/FFFF00/000000?text=Badge4" },
       { imgSrc: "https://via.placeholder.com/150/FF00FF/FFFFFF?text=Badge5" }
    ];
    setBadgesData(data);
 }, []);


   return (
      <div className="badges-page-layout">
         <LeftMenu />
         <div className="badges-container">
            {badgesData.map((badge, index) => (
               <Badge imgSrc={badge.imgSrc} id={index} key={index} />
            ))}
         </div>
      </div>
   );
}
export default Badges;
