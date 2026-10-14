const axios = window.axios;
const url =
  "https://my-json-server.typicode.com/kellybuchanan/WebDev-Spring2021";
  
// would like to get existing customers from the CRM
// using dummy data for now

export const createCustomer = (
  id,
  firstName,
  lastName,
  email,
  service,
  preference
) => {
  return axios({
    method: "post",
    url: `${url}/customers`,
    data: {
      id,
      firstName,
      lastName,
      email,
      service,
      preference,
    },
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  })
    .then((response) => {
      console.log("POST response: ", response);
    })
    .catch((err) => {
      console.log("POST error: ", err);
    });
};

import customers from "./Customers.json";

export const getAllCustomers = () => {
    return Promise.resolve(customers);
};
