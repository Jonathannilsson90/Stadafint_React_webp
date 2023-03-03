class Cleaner
{
name: string;
isCustomer: boolean;
bookings: string[]

    constructor(name: string, isCustomer: boolean, bookings: string[]) 
    {
        this.name = name;
        this.isCustomer = isCustomer;
        this.bookings = bookings;

    }
}
export default Cleaner