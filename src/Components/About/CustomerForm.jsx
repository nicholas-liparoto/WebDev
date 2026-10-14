import {
    useState
} from "react";
  
export default function CustomerForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [service, setService] = useState("");
    const [preference, setPreference] = useState("");
      
    return (
    <section>
          <h2>Create a Customer Request</h2>
    
          <form>
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
                value={service}
                onChange={(event) => setService(event.target.value)}
              >
                <option value="Lawn Mow">Lawn Mow</option>
                <option value="Mulch">Mulch</option>
                <option value="Power Wash">Power Wash</option>
              </select>
            </label>
    
            <label>
              Preferred Time
              <select
                value={preference}
                onChange={(event) => setPreference(event.target.value)}
              >
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
