import React from 'react';

const layout = ({children}) => {
   return (
      <div className='bg-green' >
         <nav>home hwader</nav>
         {children}
      </div>
   );
};

export default layout;