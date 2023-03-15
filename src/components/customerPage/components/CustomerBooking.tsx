import '../styles/CustomerBooking.css'

function CustomerBooking () {

    return(
        <div className="customer-containers">
            
            <div className="booking-header">
            <h2><span className="colored-word">Book</span> an appointment</h2>
            </div>

                <form className="booking-form">
                    <div id="booking-form-section">
                        <p className="booking-p">Select date and time:</p>
                        {/* Change and remove AM / PM ? */}
                        <input type="datetime-local" id="booking-input"/>
                    </div>
                        
                    <div id="booking-form-section">
                        <p className="booking-p">Select cleaning type:</p>
                        <select id="booking-input">
                        <option value="standard">Standard</option>
                        <option value="plus">Plus</option>
                        <option value="super">Super</option>
                        </select>
                    </div>

                    <div id="booking-form-section">
                        <p className="booking-p">Select cleaner:</p>
                        <select id="booking-input">
                        <option value="rickard">Rickard</option>
                        <option value="bosse">Bosse</option>
                        <option value="Agneta">Agneta</option>
                        </select>
                    </div>
                        
                    <div id="booking-form-section">
                        <br/>
                        <button id="booking-button">Confirm</button>
                        {/* Add preventDefault() to avoid bug */}

                    </div>

                </form>

        </div>
    )
}

export default CustomerBooking