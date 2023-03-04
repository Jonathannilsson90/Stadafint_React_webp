interface IPerformedBookings {
    customerName: string
    cleanerName: string
    level: string
    time: string
    date: string
}


const PerformedBookings = (props: IPerformedBookings) => {

    return(
        <>
        <tr>
            <td><li>Ch</li></td> 
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

export default PerformedBookings