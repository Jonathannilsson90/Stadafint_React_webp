import User from "../../models/User";

//---------------------------------------------------------------------------------
export const fetchData = async () :Promise<any> =>  {
    try
    {
        
        const resp = await fetch('https://stadafint-server-production.up.railway.app/user/all'); 
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

//---------------------------------------------------------------------------------
export const addData = async (name: string) => 
{
             
  let newCustomer = {
      name: name,
      isCustomer: true    
  } 
      try
  {
      const res = await fetch('https://stadafint-server-production.up.railway.app/user/register', 
      {
          method: 'POST',
          body: JSON.stringify(newCustomer),
          headers: 
          {
              'Content-Type': 'application/json',
          }
      })  
      return res;  
  }
  catch(error) 
  {
      console.log(error);     
  } 
}
