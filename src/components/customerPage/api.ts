import User from "../../models/User";
import { fetchAPIData } from "../global/api";

export const getCleaners = async () => {
  try {
    const data = await fetchAPIData("user/all");

    const customerData: User[] = data.users.filter(
      (item: User) => !item.isCustomer
    );

    const cleanerArray = [...customerData];

    const names = cleanerArray.map((user: User) => user.name);
    return names;
  } catch (error) {
    console.log(error);
  }
};


//Get customers from the API
/* 
export const getCustomer = async () => {
  try {
    const data = await fetchAPIData("user/all");

    const customerData: User[] = data.users.filter(
      (item: User) => item.isCustomer
    );

    const cleanerArray = [...customerData];

    const names = cleanerArray.map((user: User) => user.name);
    console.log(names);
    return names;
  } catch (error) {
    console.log(error);
  }
};
 */