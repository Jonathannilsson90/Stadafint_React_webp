import Booking from "../../models/Booking"
import Level from "../../models/Booking"
import './PlannedBookings.css'

interface IPlannedBookings {
    id:string
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
    onDeleteTaskHandler: (id:string) => void

}


const PlannedBookings = (props: IPlannedBookings) => {

    const onDeleteHandler = (event : React.MouseEvent) => {
        props.onDeleteTaskHandler(props.id);
    }

    return(
        <>
        <tr>
            <td><li>{props.date.slice(0, 10)}</li></td> 
            <td><li>{props.time}</li></td> 
            <td><li>{props.cleanerName}</li></td>  
            <td><li>{props.level}</li></td> 
                           
            <td>
                <button 
                className="planned-bookings-button"
                onClick={onDeleteHandler}><i>Delete</i></button>
            </td>
        </tr>
    </>
    )
}

export default PlannedBookings