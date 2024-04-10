import React from 'react';

const Comments = async ({promise}) => {
   const comments = await promise;
   return (
      <div className='comment'>
         {
            comments.map(comment => <div key={comment.id} comment={comment}>
               <h5>{comment.name}</h5>
               <p>{comment.body}</p>
            </div> )
         }
      </div>
   );
};

export default Comments;