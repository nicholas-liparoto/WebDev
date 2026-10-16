import {
    useState,
    useEffect
} from "react";
import { useNavigate } from "react-router-dom";
import { getAllServices } from "../../Services/ServiceModel";
import { createCustomer } from "../../Services/CustomerModel";

export default function CustomerForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [serviceId, setServiceId] = useState("");
    const [preference, setPreference] = useState("");
    const [services, setServices] = useState([]);
    const navigate = useNavigate();

    // get services for the dropdown
    useEffect(() => {
        getAllServices()
            .then((results) => {
                setServices(results);
            })
            .catch((error) => {
                console.error("Could not load services:", error);
            });
    }, []);

    // save customer then go back to home
    const handleSubmit = (event) => {
        event.preventDefault();
        createCustomer(firstName, lastName, email, serviceId, preference)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                alert("Could not save customer: " + error.message);
            });
    };

    return (
    <section>
          <h2>Create a Customer Request</h2>

          <form onSubmit={handleSubmit}>
            <label>
              First Name
              <input
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
            </label>

            <label>
              Last Name
              <input
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>

            <label>
              Service
              <select
                value={serviceId}
                onChange={(event) => setServiceId(event.target.value)}
                required
              >
                <option value="" disabled>Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.get("name")}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Preferred Time
              <select
                value={preference}
                onChange={(event) => setPreference(event.target.value)}
                required
              >
                <option value="" disabled>Select a time</option>
                <option value="Early Morning">Early Morning</option>
                <option value="Morning">Morning</option>
                <option value="Evening">Evening</option>
              </select>
            </label>

            <button type="submit">Submit Customer</button>
          </form>
          </section>
        );
    }
