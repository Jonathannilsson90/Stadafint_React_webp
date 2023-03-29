
import { createContext } from "react";
import User from "../../models/User";
import { fetchAPIData } from "../global/api";
import { givenCleanerName } from "./CleanerPage";


export const getCleanersName = async () => {
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