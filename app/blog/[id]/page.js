import Buttons from '@/app/Components/Buttons';
import Comments from '@/app/Components/Comments/Comments';
import { getAllComments, getAllSrvice } from '@/lib/getAllPosts';
import Link from 'next/link';
import React, { Suspense } from 'react';


 export async function generateMetadata({params}) {
   const {id}=params;
   const service = await getAllSrvice(id);
   return{
      title:service.title,
      description:service.body
   }
}



 const page = async ({params}) => {
   const {id}=params;
   const servicePromise = getAllSrvice(id);
   const commentsPromise = getAllComments(id);
   // const [service, comments] = await Promise.all([servicePromise , commentsPromise])

   const service = await servicePromise;
   return (
      <div>
            blog details {service.title}  
            <Link href="/blog">back blogs</Link>  
            <Buttons/>
               <br />
               <hr />
               <br />
               <Suspense fallback="comments loading......" >
                  <Comments promise={commentsPromise} />
               </Suspense>
      </div>
   );
};

 export default page;