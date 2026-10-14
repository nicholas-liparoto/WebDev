import { 
    useState, 
    useEffect 
} from "react";

import MainList from "./MainList";
import { getAllCustomers } from "../../Services/Customer";

export default function Home() {
    const [existingCustomers, setExistingCustomers] = useState([]);

    useEffect(() => {
        getAllCustomers().then((existingCustomers) => {
          setExistingCustomers(existingCustomers);
        });
    }, []);

    return (
        <section>
            <h1>Welcome to the Smart Scheduler</h1>
            <h2>Here are the existing customers</h2>
            <MainList existingCustomers={existingCustomers} />
        </section>
        
    );
}