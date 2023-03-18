import '../styles/CustomerAppointments.css'

function CustomerAppointments () {

    return(
        <div className="customer-containers">
            
            <div className="appointments-header">
            <h2><span className="colored-word">Booked</span> appointments</h2>
            </div>

            <table>
                <thead>
                    <tr>
                    <th>Time and Date</th>
                    <th>Type</th>
                    <th>Cleaner</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>March 15, 2023 10:00 AM</td>
                        <td>Plus</td>
                        <td>Rickard</td>
                    </tr>
                    <tr>
                        <td>March 16, 2023 2:00 PM</td>
                        <td>Standard</td>
                        <td>Rickard</td>
                    </tr>
                    <tr>
                        <td>March 18, 2023 9:30 AM</td>
                        <td>Super</td>
                        <td>Agneta</td>
                    </tr>
                    <tr>
                        <td>March 19, 2023 3:00 PM</td>
                        <td>Standard</td>
                        <td>Bosse</td>
                    </tr>
                    <tr>
                        <td>March 19, 2023 3:00 PM</td>
                        <td>Standard</td>
                        <td>Bosse</td>
                    </tr>
                    <tr>
                        <td>March 19, 2023 3:00 PM</td>
                        <td>Standard</td>
                        <td>Bosse</td>
                    </tr>
                    <tr>
                        <td>March 19, 2023 3:00 PM</td>
                        <td>Standard</td>
                        <td>Bosse</td>
                    </tr>
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default CustomerAppointments;