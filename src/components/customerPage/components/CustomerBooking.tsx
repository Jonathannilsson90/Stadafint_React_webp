import '../styles/CustomerBooking.css'

function CustomerBooking () {

    return(
        <div className="booking-container">
            
            <h2>Book an appointment</h2>

                <form className="booking-form">
                    <div id="booking-form-section">
                        <p>Select date and time:</p>
                        <input type="datetime-local"/>
                    </div>
                        
                    <div id="booking-form-section">
                        <p>Select cleaning type:</p>
                        <select id="size" name="size">
                        <option value="standard">Standard</option>
                        <option value="plus">Plus</option>
                        <option value="super">Super</option>
                        </select>
                    </div>

                    <div id="booking-form-section">
                        <p>Select cleaner:</p>
                        <select id="size" name="size">
                        <option value="rickard">Rickard</option>
                        <option value="bosse">Bosse</option>
                        <option value="Agneta">Agneta</option>
                        </select>
                    </div>
                        
                    <div id="booking-form-section">
                        <br/>
                        <button>Book</button>
                    </div>

                </form>

        </div>
    )
}

export default CustomerBooking