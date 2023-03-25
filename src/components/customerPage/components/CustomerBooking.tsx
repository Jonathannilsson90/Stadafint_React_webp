import "../styles/CustomerBooking.css";

import { useContext} from "react";
import axios from "axios";
import APIContext from "../api";
import FormData from "./forms/interface";
import { CleanerList } from "./forms/CleaningForm";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function CustomerBooking() {

  const { apiUrl } = useContext(APIContext);
  const { name } = useParams<{ name?: string }>();
  const customername = name ?? "Default Name";
  
const {register, handleSubmit, formState: {errors}} = useForm<FormData>()


  const onSubmit = async (formData: FormData) => {
 
      try {
        const completeData = {...formData, customername: customername}
        const response = await axios.post(
          `${apiUrl}booking/createbooking`, completeData
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    } 

  return (
    <div className="customer-containers">
      <div className="booking-header">
        <h2>
          <span className="colored-word">Book</span> an appointment
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="booking-form">
        <div className="booking-form-section">
          <p className="booking-p">Select date of booking:</p>
          <input
            type="date"
            id="booking-input"
        {...register("date", {required: true})}
          />
          {errors.date && <div className="error">*Please select desired date.</div>}
        </div>

        <div className="booking-form-section">
          <p className="booking-p">Select time:</p>
          <select
   {...register('time', {required:true})}
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
          {errors.time && <div className="error">*Please select desired time.</div>}
        </div>

        <div>
          <p className="booking-p">Select cleaning type:</p>
          <input
            className="booking-radio"
            type="radio"
            value="BASIC"
{...register('level', {required: true})}
          ></input>
          <label className="booking-radio">Basic</label>
          <input
            className="booking-radio"
            type="radio"
            value="TOP"
            {...register('level', {required: true})}
          ></input>
          <label className="booking-radio">Top</label>
          <input
            className="booking-radio"
            type="radio"
            value="DIAMOND"
            {...register('level', {required: true})}
          ></input>
          <label className="booking-radio">Diamond</label>
          <input
            className="booking-radio"
            type="radio"
            value="WINDOW"
            {...register('level', {required: true})}
          ></input>
          <label className="booking-radio">Window</label>
          {errors.level && <div className="error">*Please select one type of cleaning.</div>}
        </div>

        <div className="booking-form-section">
          <p className="booking-p">Select cleaner:</p>
          <select
{...register("cleanername", {required: true})}
            id="booking-input"
          >
            <option value=""></option>
            <CleanerList />
          </select>
          {errors.cleanername && <div className="error">*Please select desired cleaner.</div> }
        </div>

        <div id="booking-form-section">
          <br />
          <button id="booking-button" type="submit">Confirm</button>

        </div>
      </form>
    </div>
  );
}
export default CustomerBooking;
