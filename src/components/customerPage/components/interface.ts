export interface BookedAppointments {
    _id: string;
    customername: string;
    cleanername: string;
    time: string;
    level: string;
    date: string;
    status: boolean;
}

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