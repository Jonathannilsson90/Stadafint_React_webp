export interface ICleanerApointments {
    _id: string;
    customername: string;
    cleanername: string;
    time: string;
    level: string;
    date: string;
    status: boolean;
}
export interface IClenerItem {
    customerName: string;
    cleanerName: string;
    time: string;
    level: string;
    status: boolean;
    handleToggle: (id: string) =>void 
    id: string;
}

export interface ICleanerPage {
    loginButtonTextHandler : (login: boolean) => void
}