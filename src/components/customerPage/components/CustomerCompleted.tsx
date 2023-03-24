import '../styles/CustomerCompleted.css';

function CustomerCompleted () {

    return(
        <div className="customer-containers">
            
            <div className="completed-header">
                <h2><span className="colored-word">Completed</span> appointments</h2>
            </div>

            <table className="completed-container-table">
                <thead className="completed-table-header">
                    <tr>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Type</th>
                    <th>Cleaner</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>March 15, 2023</td>
                        <td>10:00 AM</td>
                        <td>Plus</td>
                        <td>Rickard</td>
                    </tr>
                    <tr>
                        <td>March 15, 2023</td>
                        <td>10:00 AM</td>
                        <td>Standard</td>
                        <td>Rickard</td>
                    </tr>
                    <tr>
                        <td>March 15, 2023</td>
                        <td>10:00 AM</td>
                        <td>Super</td>
                        <td>Agneta</td>
                    </tr>
                    <tr>
                        <td>March 15, 2023</td>
                        <td>10:00 AM</td>
                        <td>Standard</td>
                        <td>Bosse</td>
                    </tr>
                    
                </tbody>
            </table>

        </div>
    )
}

export default CustomerCompleted;