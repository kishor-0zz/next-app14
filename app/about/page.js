import Link from 'next/link';
import React from 'react';

const about = () => {
   return (
      <div>
         <h2>about</h2>
         <Link href="/about" >about</Link>
         <Link href="/about/service" >serrvice</Link>
      </div>
   );
};

export default about;