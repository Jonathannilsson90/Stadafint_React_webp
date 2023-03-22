import "../styles/CustomerBooking.css";

import { useContext, useState } from "react";
import axios from "axios";
import APIContext from "../api";
import FormData from "./forms/interface";
import { CleanerList } from "./forms/CleaningForm";
import { useParams } from "react-router-dom";

function CustomerBooking() {
  const { apiUrl } = useContext(APIContext);
  const { name } = useParams<{ name?: string }>();
  const customerName = name ?? "Default Name";
  const [error, setError] = useState("");
  const [formData, setFormData] = useState<FormData>({
    customername: customerName,
    cleanername: "",
    time: "",
    level: "",
    date: "",
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formData.cleanername &&
      formData.time &&
      formData.level &&
      formData.date
    ) {
      try {
        const response = await axios.post(
          `${apiUrl}booking/createbooking`,
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("Please fill in all fields before pressing 'Submit'");
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="customer-containers">
      <div className="booking-header">
        <h2>
          <span className="colored-word">Book</span> an appointment
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="booking-form">
        <div className="booking-form-section">
          <p className="booking-p">Select date of booking:</p>
          <input
            type="date"
            id="booking-input"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="booking-form-section">
          <p className="booking-p">Select time:</p>
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            id="booking-input"
          >
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

        <div>
          <p className="booking-p">Select cleaning type:</p>
          <input
            className="booking-radio"
            type="radio"
            name="level"
            value="BASIC"
            checked={formData.level === "BASIC"}
            onChange={handleChange}
          ></input>
          <label className="booking-radio">Basic</label>
          <input
            className="booking-radio"
            type="radio"
            name="level"
            value="TOP"
            checked={formData.level === "TOP"}
            onChange={handleChange}
          ></input>
          <label className="booking-radio">Top</label>
          <input
            className="booking-radio"
            type="radio"
            name="level"
            value="DIAMOND"
            checked={formData.level === "DIAMOND"}
            onChange={handleChange}
          ></input>
          <label className="booking-radio">Diamond</label>
          <input
            className="booking-radio"
            type="radio"
            name="level"
            value="WINDOW"
            checked={formData.level === "WINDOW"}
            onChange={handleChange}
          ></input>
          <label className="booking-radio">Window</label>
        </div>

        <div className="booking-form-section">
          <p className="booking-p">Select cleaner:</p>
          <select
            name="cleanername"
            value={formData.cleanername}
            onChange={handleChange}
            id="booking-input"
          >
            <option value=""></option>
            <CleanerList />
          </select>
        </div>

        <div id="booking-form-section">
          <br />
          <button id="booking-button">Confirm</button>
          {error && <div className="error">{error}</div>}
        </div>
      </form>
    </div>
  );
}
export default CustomerBooking;
