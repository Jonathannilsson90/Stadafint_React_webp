import '../styles/CustomerButtonBar.css';

function CustomerButtonBar () {
    return(<>


    <div className="button-bar">

        <h2>How can we assist you today?</h2>

        <div className="buttons">

        <div className="btn-1" id="btn">
            <p>Book an appointment</p>
            </div>

        <div className="btn-2" id="btn">
            <p>Check booked appointments</p>
            </div>

        <div className="btn-3" id="btn">
            <p>Check completed appointments</p>
            </div>

        </div>

    </div>
    </>)
}

export default CustomerButtonBar