import '../styles/CustomerButtonBar.css';

function CustomerButtonBar () {
    return(<>


    <div className="button-bar">

        <h2>What would you like to do?</h2>

        <div className="buttons">

        <div className="btn-1" id="btn">
            <p>Book an appointment</p>
            </div>

        <div className="btn-2" id="btn">
            <p>Booked appointments</p>
            </div>

        <div className="btn-3" id="btn">
            <p>Completed appointments</p>
            </div>

        </div>

    </div>
    </>)
}

export default CustomerButtonBar