import User from "../../../models/User";


export const getCleaners = async () => {
  try {
    const response = await fetch(
      "https://stadafint-server-production.up.railway.app/user/all"
    );

    const data = await response.json();

    const customerData: User[] = data.users.filter(
      (item: User) => !item.isCustomer
    );

    const cleanerArray = [...customerData];

    const names = cleanerArray.map((user: User) => user.name);
    console.log(names)
    return names;
  } catch (error) {
    console.log(error);
  }
};


export const getCustomer = async () => {
    try {
      const response = await fetch(
        "https://stadafint-server-production.up.railway.app/user/all"
      );
  
      const data = await response.json();
  
      const customerData: User[] = data.users.filter(
        (item: User) => item.isCustomer
      );
  
      const cleanerArray = [...customerData];
  
      const names = cleanerArray.map((user: User) => user.name);
      console.log(names)
      return names;
    } catch (error) {
      console.log(error);
    }
  };
  
