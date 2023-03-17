import User from "../../models/User";

export const fetchData = async () :Promise<any> =>  {
    try
    {
        
        const resp = await fetch('https://stadafint-server-production.up.railway.app/user/all') 
        const data = await resp.json();
           
          const transformData : User[] = data.users.map((d :User) => {
            return{
              _id : d._id,
              name: d.name,
              isCustomer : d.isCustomer
            }
          })
          return (transformData!);                       
    }    
    catch(error)
    {
        console.log(error);
    }   
}
