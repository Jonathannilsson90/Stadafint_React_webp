enum Level{
    Basic,
    Topp,
    Dimond,
    Window
}

class Booking
{
    _id: string;
    customerName: string;
    cleanerName: string;
    level: Level;
    time: string;
    date: Date;
    status: boolean


    constructor(
                _id: string,
                date : Date, 
                time: string, 
                customerName: string, 
                level: Level, 
                cleanerName: string, 
                status: boolean)
    {
        this._id = _id;
        this.date = date;
        this.time = time;
        this.customerName = customerName;
        this.level = level;
        this.cleanerName = cleanerName;
        this.status = status
    }
}
export default Booking