import React from 'react'

const PatientRecord = () => {
  return (
    <div>PatientRecord
       <label for="cars">Choose a car:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
    </div>
  )
}

export default PatientRecord