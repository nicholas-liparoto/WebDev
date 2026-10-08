import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

const MainList = ({ existingCustomers }) => {

  // populate existing customers

  return html`
    <div>
      <hr />
      <h2>Existing Customers</h2>
      <ul>
        ${existingCustomers.map(
          (existingCustomers) =>
            html` <li key="${existingCustomers}">
              ${existingCustomers.email} | ${existingCustomers.firstName} ${existingCustomers.lastName} | ${existingCustomers.service}
            </li>`
        )}
      </ul>
    </div>
  `;
};

export default MainList;
