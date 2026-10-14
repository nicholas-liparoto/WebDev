const MainList = ({ existingCustomers }) => {
  return (
    <div>
      <hr />
      <h2>Existing Customers</h2>
      <ul>
        {existingCustomers.map((customer) => (
          <li key={customer.id}>
            {customer.email} | {customer.firstName}{" "}
            {customer.lastName} | {customer.service}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainList;
