import React from 'react'
import appointments from '../Data/Appointment'
import Appointment from './Appointment'
import './AppointDisplay.css'

const AppointDisplay = () => {
  return (
    <div className='appointments'>
      {
        appointments.map((appointment,i)=>{
         return <Appointment key={i} 
         id={appointment.id} 
         date={appointment.date}
         time={appointment.time}
         name={appointment.patientName} 
         doctor={appointment.doctor}
         age={appointment.age}
         gender={appointment.gender}
         mobileNumber={appointment.mobileNumber}
         />
        })
        
      }
    </div>
  )
}

export default AppointDisplay
