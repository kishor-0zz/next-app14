import Buttons from '@/app/Components/Buttons';
import { getAllSrvice } from '@/lib/getAllPosts';
import Link from 'next/link';
import React from 'react';

const page = async ({params}) => {
   const {id}=params;
   const services = await getAllSrvice(id);




   return (
      <div>
            blog details {services.title}  
            <Link href="/blog">back blogs</Link>  
            <Buttons/>
      </div>
   );
};

export default page;