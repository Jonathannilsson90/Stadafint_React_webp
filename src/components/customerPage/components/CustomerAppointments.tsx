import '../styles/CustomerAppointments.css'

function CustomerAppointments () {

    return(
        <div className="appointments-container">
            <h2>Booked appointments</h2>

            <table>
                <thead>
                    <tr>
                    <th>Time and Date</th>
                    <th>Cleaner</th>
                    <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>March 15, 2023 10:00 AM</td>
                        <td>Rickard</td>
                        <td>Plus</td>
                    </tr>
                    <tr>
                        <td>March 16, 2023 2:00 PM</td>
                        <td>Rickard</td>
                        <td>Standard</td>
                    </tr>
                    <tr>
                        <td>March 18, 2023 9:30 AM</td>
                        <td>Agneta</td>
                        <td>Super</td>
                    </tr>
                    <tr>
                        <td>March 19, 2023 3:00 PM</td>
                        <td>Bosse</td>
                        <td>Standard</td>
                    </tr>
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default CustomerAppointments;