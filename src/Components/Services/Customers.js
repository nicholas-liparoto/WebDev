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

export const getAllCustomers = () => {
  return axios
    .get("./Services/Customers.json")
    .then((response) => {
      const customers = response.data;

      console.log(customers);

      return customers;
    })
    .catch((err) => {
      console.log("GET Error: ", err);
    });
};
