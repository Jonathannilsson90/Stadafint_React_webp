class User
{
_id : string;    
name: string;
isCustomer: boolean;

    constructor(_id: string, name: string, isCustomer: boolean) 
    {
        this._id = _id;
        this.name = name;
        this.isCustomer = isCustomer;

    }
}
export default User