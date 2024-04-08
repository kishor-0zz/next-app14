import React from 'react';

const AboutLayout = ({children}) => {
   return (
      <div>
         <nav>home  about</nav>
         {children}
      </div>
   );
};

export default AboutLayout;