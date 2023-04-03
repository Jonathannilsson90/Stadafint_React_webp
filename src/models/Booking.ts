class Booking
{
    _id: string;
    customername: string;
    cleanername: string;
    level: string;
    time: string;
    date: string;
    status: boolean


    constructor(
                _id: string,
                date : string, 
                time: string, 
                customername: string, 
                level: string, 
                cleanername: string, 
                status: boolean)
    {
        this._id = _id;
        this.date = date;
        this.time = time;
        this.customername = customername;
        this.level = level;
        this.cleanername = cleanername;
        this.status = status
    }
}
export default Booking