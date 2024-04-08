import getAllPosts from '@/lib/getAllPosts';
import React from 'react';

const page = async () => {
   const data = await getAllPosts();
   console.log(data);
   return (
      <div>
         {
            data.map(post=><li key={post.id} post={post} >{post.title}</li>)
         }
      </div>
   );
};

export default page;