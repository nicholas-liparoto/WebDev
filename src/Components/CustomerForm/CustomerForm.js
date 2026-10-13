import {
  html
} from "https://unpkg.com/htm/preact/standalone.module.js";

const CustomerForm = ({ customers, time, service, onCustomerChange, onTimeChange, onServiceChange }) => {

    // Will hopefully be able to append new customers to the list
    return html`
        <h2>Enter Customer Info</h2>
        
        <label>
          <b>Name </b>
          <input value=${customers} 
            onInput=${onCustomerChange}
            type="text"
            placeholder="Enter name"
            name="customer"
            id="customer"
            required
          />
        </label>
        
        <br />
        <br />
        <b>Time </b>
        <select value=${time} onChange=${onTimeChange}>
            <option value="Early Morning">Early Morning</option>
            <option value="Morning">Morning</option>
            <option value="Evening">Evening</option>
        </select>
        
        <br />
        <br />
        <b>Service </b>
        <select value=${service} onChange=${onServiceChange}>
            <option value="Lawn Mow">Lawn Mow</option>
            <option value="Mulch">Mulch</option>
            <option value="Power Wash">Power Wash</option>
        </select>

        <br />
        <br />
        <button type="button">Submit</button>

        <hr />
        <h2>New Customer</h2>
        <p>Name: ${customers}</p>
        <p>Time: ${time}</p>
        <p>Service: ${service}</p>
    `
  
}

export default CustomerForm;
