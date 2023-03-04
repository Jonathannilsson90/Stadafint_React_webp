import Booking from "../../models/Booking"
import Level from "../../models/Booking"
import './PlannedBookings.css'

interface IPlannedBookings {
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
}


const PlannedBookings = (props: IPlannedBookings) => {

    return(
        <>
        <tr>
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.cleanerName}</li></td>  
            <td><li>{props.level}</li></td> 
                           
            <td>
                <button ><i>Delete</i></button>
            </td>
        </tr>
    </>
    )
}

export default PlannedBookings