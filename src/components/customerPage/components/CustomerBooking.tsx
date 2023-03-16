import '../styles/CustomerBooking.css'

function CustomerBooking () {

    return(
        <div className="customer-containers">
            
            <div className="booking-header">
            <h2><span className="colored-word">Book</span> an appointment</h2>
            </div>

                <form className="booking-form">
                    <div className="booking-form-section">
                        <p className="booking-p">Select date of booking:</p>
                        {/* Change and remove AM / PM ? */}
                        <input type="date" id="booking-input"/>
                    </div>
                        
                    <div className="booking-form-section">
                    <p className="booking-p">Select time:</p>
                        <select id="booking-input">
                        <option value=""></option>
                        <option value="07:00">07:00</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>

                        </select>
                    </div>

                    <div className="booking-form-section">
                        <p className="booking-p">Select cleaning type:</p>
                        <input type="radio" name="type" value="Basic"></input>
                        <label>Basic</label>
                        <input type="radio" name="type" value="Topp"></input>
                        <label>Topp</label>
                        <input type="radio" name="type" value="Diamond"></input>
                        <label>Diamond</label>
                        <input type="radio" name="type" value="Window"></input>
                        <label>Window</label>
                    </div>


                    <div className="booking-form-section">
                        <p className="booking-p">Select cleaning type:</p>
                        <select id="booking-input">
                        <option value="standard">Standard</option>
                        <option value="plus">Plus</option>
                        <option value="super">Super</option>
                        </select>
                    </div>

                    <div className="booking-form-section">
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