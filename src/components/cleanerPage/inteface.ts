export interface IClenerItem {
    customerName: string;
    time: string;
    level: string;
    status: boolean;
    date: string;
    handleToggle: (id: string) =>void 
    id: string;
}

export interface ICleanerPage {
    loginButtonTextHandler : (login: boolean) => void
}