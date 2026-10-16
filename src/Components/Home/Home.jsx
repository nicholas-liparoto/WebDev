import {
    useState,
    useEffect
} from "react";

import MainList from "./MainList";
import { getAllCustomers } from "../../Services/CustomerModel";

export default function Home() {
    const [existingCustomers, setExistingCustomers] = useState([]);

    // load customers from Parse
    useEffect(() => {
        getAllCustomers()
            .then((customers) => {
                setExistingCustomers(customers);
            })
            .catch((error) => {
                console.error("Could not load customers:", error);
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
