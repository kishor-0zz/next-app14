const  getAllPosts = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limite=10')
   const data = await res.json()
   return  data ;
};

const getAllSrvices = async ()=>{
   const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limite=10");
   const data = await res.json()
   return data
}
const getAllSrvice = async (id)=>{
   const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if(!res.ok){
         throw new console.error('there was error');
      }
   const data = await res.json()
   return data
}

export  {getAllPosts, getAllSrvices , getAllSrvice};