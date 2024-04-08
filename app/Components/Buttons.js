'use client'

import React from 'react';

const Buttons = () => {
   return (
      <div>
         <button onClick={()=> console.log('this is clint side') } >click me</button>
      </div>
   );
};

export default Buttons;