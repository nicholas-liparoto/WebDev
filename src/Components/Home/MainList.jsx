const MainList = ({ existingCustomers }) => {
  return (
    <div>
      <hr />
      <h2>Existing Customers</h2>
      <ul>
        {existingCustomers.map((customer) => (
          <li key={customer.id}>
            {customer.get("email")} | {customer.get("firstName")}{" "}
            {customer.get("lastName")} | {customer.get("service")?.get("name")} |{" "}
            {customer.get("preference")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainList;
