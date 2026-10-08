import {
  html,
  useEffect,
  useState,
} from "https://unpkg.com/htm/preact/standalone.module.js";

import { getAllCustomers } from "../../Services/Customers.js";

import MainList from "./MainList.js";
import CustomerForm from "./CustomerForm/CustomerForm.js";

const Main = () => {
  // es6 syntax arrow function () => {} same thing as function() {}

  const [existingCustomers, setExistingCustomer] = useState([]);
  const [customers, setCustomer] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState("");

  // Get customer data from the service
  useEffect(() => {
    getAllCustomers().then((existingCustomers) => {
      setExistingCustomer(existingCustomers);
    });
  }, []);

  const handleCustomerChange = (event) => {
    setCustomer(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  return html`
    <div>
      <h1>Smart Scheduler</h1>
      Create and manage customer scheduling requests.

      <hr />

      <${CustomerForm}
        customers=${customers}
        time=${time}
        service=${service}
        onCustomerChange=${handleCustomerChange}
        onTimeChange=${handleTimeChange}
        onServiceChange=${handleServiceChange}
      />

      <${MainList} existingCustomers=${existingCustomers} />
    </div>
  `;
};

// `${componentName}` es6 strings

export default Main;
