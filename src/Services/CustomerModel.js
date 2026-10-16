import Parse from "parse";

// Customer model - each customer has a pointer to a Service

// get all customers and their service
export const getAllCustomers = () => {
  const query = new Parse.Query("Customer");
  query.include("service"); // so we can get the service name
  query.ascending("lastName");
  return query.find();
};

// save a new customer
export const createCustomer = (firstName, lastName, email, serviceId, preference) => {
  const customer = new Parse.Object("Customer");
  customer.set("firstName", firstName);
  customer.set("lastName", lastName);
  customer.set("email", email);
  customer.set("preference", preference);

  // pointer to the service they picked
  const service = new Parse.Object("Service");
  service.id = serviceId;
  customer.set("service", service);

  return customer.save();
};
