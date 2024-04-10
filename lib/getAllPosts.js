const  getAllPosts = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limite=10')
   if(!res.ok){
      throw new console.error('there was service error');
   }
   const data = await res.json()
   return  data ;
};

const getAllSrvices = async ()=>{
   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limite=10");
   if(!res.ok){
      throw new console.error('there was services error');
   }
   const data = await res.json()
   return data
}
const getAllSrvice = async (id)=>{
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
         {
            next:{
               revalidate:10,
            }
         }
      );
      if(!res.ok){
         throw new console.error('there was service error');
      }
      const data = await res.json()
      return data
}

const getAllComments = async(id)=>{
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
   if(!res.ok){
      throw new console.error('there was comments error');
   }
   const data = await res.json()
   return data;
}

export default {getAllPosts, getAllSrvices , getAllSrvice , getAllComments};