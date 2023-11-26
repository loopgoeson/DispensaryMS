import React, { useState } from 'react';
import './AppointmentForm.css'; 
import img from '../Asset/appointment1.jpg';


function AppointmentForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [patientName, setPatientName] = useState('');
  const [doctor, setDoctor] = useState('');
  const [age, setAge]=useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');


  const handleFormSubmit = async(e) => {
    e.preventDefault();
    console.log('Appointment details submitted:', { date, time, patientName,doctor,age,gender,mobileNumber});
            let response = await fetch("http://localhost:3001/api/addAppointment", {
                method: "POST",
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    date : date,
                    time: time,
                    patientName: patientName,
                    doctor:doctor,
                    age:age,
                    gender:gender,
                    mobileNumber:mobileNumber
                })
            });
            const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Oops, Couldn't book your appointment ");
    }
    if (json.success) {
      alert("Appointment booked !")
    }
            
            };


  return (
    <div className=''>
    <div className="appointment-form justify-around">
      <h2>Schedule an Appointment</h2>
      <div className='photo'>
            <img src={img} alt="" className='h-60' />
      </div>
      
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        
        <div>
           <label>Doctor Name :</label>
           <select
            value={doctor}
            onChange={(e)=> setDoctor(e.target.value)}
           >
            <option value="" disabled>
              Select a Doctor
            </option>
            <option value="bhatra">Dr. Gambhir Bhatra</option>
            <option value="sinha">Dr. Manoj Sinha</option>
            <option value="rao">Dr. Gaurav Rao</option>
           </select>
        </div>

        <div>
          <label>Patient Name:</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
            placeholder='Enter your Name '
          />
        </div>

        <div>
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            placeholder='Enter your Age'
          />
        </div>

        <div>
          <label>Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" disabled>
              Select gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label>Mobile Phone Number:</label>
          <input
            type="tel" 
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            required
            placeholder="Enter your mobile number"
          />
        </div>

        <div>
          <button onClick={handleFormSubmit} value="Submit" type="submit">Submit Appointment</button>
        </div>
      </form>
      </div>
      
    
      </div>
  );
}

export default AppointmentForm;
