import Parse from "parse";

// Service model (Lawn Mow, Mulch, etc.)

// get all services
export const getAllServices = () => {
  const query = new Parse.Query("Service");
  query.ascending("name");
  return query.find();
};
