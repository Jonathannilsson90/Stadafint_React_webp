import '../styles/CustomerBooking.css'

function CustomerBooking () {

    return(
        <div className="booking-container">
            
            <h2 id="booking-small-container"className="booking-header">Book an appointment</h2>

            
            <div id="booking-small-container"className="selection-container">
                <form>
                    <p>Select date and time:</p>
                    <input type="datetime-local"/>
                    
                    <p>Select cleaning type:</p>
                    <select id="size" name="size">
                    <option value="standard">Standard</option>
                    <option value="plus">Plus</option>
                    <option value="super">Super</option>
                    </select>

                    <p>Select cleaner:</p>
                    <select id="size" name="size">
                    <option value="rickard">Rickard</option>
                    <option value="bosse">Bosse</option>
                    <option value="Agneta">Agneta</option>
                    </select>
                    
                    <br/>
                    <button>Book</button>

                </form>
            </div>

        </div>
    )
}

export default CustomerBooking