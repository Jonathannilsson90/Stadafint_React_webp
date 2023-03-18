import '../styles/CustomerButtonBar.css';

function CustomerButtonBar () {
        

    return(<>

    <div className="button-bar">

        <h2 className="buttons-h2">How can we assist you today?</h2>

        <div className="buttons">

        <button className="btn-1" id="btn">
            <span>Book</span> an appointment
            </button>

        <button className="btn-2" id="btn">
            Check <span>booked</span> appointments
            </button>

        <button className="btn-3" id="btn">
            Check <span>completed</span> appointments
            </button>

        </div>

    </div>
    </>)
}

export default CustomerButtonBar