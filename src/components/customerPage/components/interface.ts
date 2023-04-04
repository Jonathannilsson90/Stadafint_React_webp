export interface FormData {
    customername: string;
    cleanername: string;
    time: string;
    level: string;
    date: string;
  }
  
export interface ICustomerPage {
    loginButtonTextHandler : (login: boolean) => void
}