import './NewBooking.css'

const NewBooking = () => {
    return(
        <div className="form-wrapper">
            <div className="form-content">

                <form action="" className="form">

                    <div>
                        <label htmlFor="cleaner-name">Select cleaner</label>
                        <select id="cleaner-name" name="cleaner-name">
                            <option value="cleaner-1" selected>Cleaner-1-</option>
                            <option value="cleaner-2">Cleaner-2-</option>
                            <option value="cleaner-3">Cleaner-3-</option>
                            <option value="cleaner-4">Cleaner-4-</option>
                        </select>
                    </div>    


                    <div>
                        <legend>Select a type of cleaning</legend>

                        <input type="radio" id="basic" name="level" value="Basic"/>
                        <label htmlFor="basic">Basic</label>

                        <input type="radio" id="top" name="level" value="Top"/>
                        <label htmlFor="top">Top</label>

                        <input type="radio" id="diamond" name="level" value="Diamond"/>
                        <label htmlFor="diamond">Diamond</label>

                        <input type="radio" id="windows" name="level" value="Windows"/>
                        <label htmlFor="windows">Windows</label>
                    </div>

                    <div>
                        <label htmlFor="date"></label>
                        <input id="date" type="date" name="date" required/>
                        <script>
                            $('#date').val(new Date().toJSON().slice(0,10));
                        </script>
                    </div>

                    <div>
                        <label htmlFor="time"></label>
                        <input id="time" type="text" pattern="([0-24]=[0-59])" placeholder='--.--' required/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default NewBooking