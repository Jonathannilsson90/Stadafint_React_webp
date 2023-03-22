class Booking
{
    _id: string;
    customerName: string;
    cleanerName: string;
    level: string;
    time: string;
    date: string;
    status: boolean


    constructor(
                _id: string,
                date : string, 
                time: string, 
                customerName: string, 
                level: string, 
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