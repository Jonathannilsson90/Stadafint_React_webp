enum Level{
    Basic,
    Topp,
    Dimond,
    Window
}

class Booking
{
    date: Date;
    time: string;
    customer: string;
    level: Level;
    cleaner: string;
    status: boolean;

    constructor(date : Date, 
                time: string, 
                customer: string, 
                level: Level, 
                cleaner: string, 
                status: boolean)
    {
        this.date = date;
        this.time = time;
        this.customer = customer;
        this.level = level;
        this.cleaner = cleaner;
        this.status = status;
    }
}
export default Booking