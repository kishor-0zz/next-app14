import Link from 'next/link';
import React from 'react';

const blog = () => {
   const blogs =[
      {
         id:1,
         title:"blog 1",
         discription:"Lorem ipsum dolor sit amet consectetur ad earum?"
      },
      {
         id:2,
         title:"blog 2",
         discription:"Lorem ipsum dolor sit amet consectetur ad earum?"
      },
      {
         id:3,
         title:"blog 3",
         discription:"Lorem ipsum dolor sit amet consectetur ad earum?"
      }
   ]
   return (
      <div>
            {
               blogs.map((blog)=>
               <div key={blog.id} blog={blog}>
                  <div className='blog_style1'>
                     <h2 className='title'> {blog.title}</h2>
                     <p className='blog_text'>
                        {blog.discription}
                     </p>
                    <Link href={`/blog/${blog.id}`} >read more</Link>
                  </div>
               </div>
            )}
      </div>
   );
};

export default blog;